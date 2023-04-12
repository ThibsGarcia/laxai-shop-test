import type { Category } from "./Filters.interface";

export interface ProductInterface {
    id: number;
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    },
    category: Category;
    categoryImage: {
        mobile: string;
        tablet:string;
        desktop: string;
    },
    new: string;
    price:number;
    description: string;
    features: string;
    includes: [
        {
            quantity: string,
            item: string,
        },
        {
            quantity: number;
            item: string;
        },
        {
            quantity: number;
            item: string;
        },
        {
            quantity: number;
            item: string;
        },
        {
            quantity: number;
            item: string;
        }
    ],
    gallery: {
        frist: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        second: {
            mobile: string;
            tablet: string;
            desktop: string;
        },
        third: {
            mobile: string;
            tablet: string;
            desktop: string;
        }
    },
    others: [
        {
            slug: string,
            name: string,
            image: {
                    mobile: string,
                    tablet: string,
                    desktop: string,
                }
            },
            {
                slug: string,
                name: string,
                image: {
                    mobile: string,
                    tablet: string,
                    desktop: string,
                }
            },
            {
                slug: string,
                name:string,
                image: {
                    mobile: string,
                    tablet: string,
                    desktop: string;
                }
            }
    ]
}