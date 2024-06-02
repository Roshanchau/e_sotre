
export const revalidate= 0;

interface CategoryPageProps{
    params:{
        categoryId: string;
    },
    searchParams:{
        colorId: string;
        sizeId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = ({
    params,
    searchParams
})=>{
    return(
        <div>
            category
        </div>
    )
}

export default CategoryPage