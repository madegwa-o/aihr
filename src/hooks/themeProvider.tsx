import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode, type JSX,
} from "react";

// 1. Define allowed theme types
type Theme = "light" | "dark";

// 2. Define the shape of your context
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

// 3. Create the context with a default fallback (you can override this with a proper provider)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 4. Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
}

// 5. Provider props type
interface ThemeContextProviderProps {
    children: ReactNode;
}

// 6. The provider component
export default function ThemeContextProvider({
                                                 children,
                                             }: ThemeContextProviderProps): JSX.Element {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme") as Theme | null;
            if (savedTheme === "light" || savedTheme === "dark") {
                return savedTheme;
            }

            if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                return "dark";
            }
        }

        return "dark"; // Default
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem("theme")) {
                setTheme(e.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = (): void => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const setThemeContext = (newTheme: Theme): void => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: setThemeContext }}>
            {children}
        </ThemeContext.Provider>
    );
}
