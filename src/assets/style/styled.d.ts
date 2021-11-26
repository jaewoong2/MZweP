import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        basicWidth: string;

        color: {
            blue: string;
            main: string;
            sub: string;
            pink: string,
            mint: string,
            skyBlue: string,
        };
    }
}