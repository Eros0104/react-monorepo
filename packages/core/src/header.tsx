export interface HeaderProps {
    children: string;
} 

export const Header = ({ children }: HeaderProps) => {
    return (
        <header>
            <h1>
                Shared header library: {children}
            </h1>
        </header>
    )
}
