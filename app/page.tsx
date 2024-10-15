import {Container, Filters, Title, TopBar} from "@/components/shared";
import {ProductsGroupList} from "@/components/shared/products-group-list";

export default function Home() {
    return (
        <>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold text-green-800'/>
            </Container>
            <TopBar/>
            <Container className='mt-10 pb-14'>
                <div className="flex gap-[70px]">
                    {/*Фильтрация*/}
                    <div className="w-[250px]">
                        <Filters/>
                    </div>
                    {/*Список товаров*/}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title='Пиццы'
                                categoryId={1}
                                products={[{
                                    id: 1,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },{
                                    id: 2,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },{
                                    id: 3,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },{
                                    id: 4,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },{
                                    id: 5,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },{
                                    id: 6,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },]}
                            />
                            <ProductsGroupList
                                title='Комбо'
                                categoryId={2}
                                products={[{
                                    id: 1,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },{
                                    id: 2,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },{
                                    id: 3,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },{
                                    id: 4,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },{
                                    id: 5,
                                    name: 'Чизбургер-пицца',
                                    price: 100,
                                    items: [{price: 100}],
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif'
                                },]}
                            />

                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
