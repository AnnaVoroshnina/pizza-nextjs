import {FC} from "react";
import {cn} from "@/shared/lib/utils";
import Image from "next/image";
import {User} from "lucide-react";
import {Button} from "@/shared/components/ui";
import {CartButton, Container, SearchInput} from "@/shared/components/shared/index";
import Link from "next/link";

interface Props {
    className?: string
}

export const Header: FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/*Левая часть*/}
                <Link href='/'>
                    <div className='flex items-center gap-2'>
                        <Image src={'/logo.png'} alt={'Logo'} width={35} height={35}/>
                        <div>
                            <h1 className='text-2xl uppercase font-black text-green-800'>Juicy Pizza</h1>
                            <p className='text-sm text-green-600 leading-3'>сочней уже некуда</p>
                        </div>
                    </div>
                </Link>
                <div className="mx-10 flex-1">
                    <SearchInput/>
                </div>
                {/*Правая часть*/}
                <div className='flex items-center gap-3'>
                    <Button variant="outline" className='flex items-center gap-2'>
                        <User size={16}/>
                        Войти
                    </Button>
                    <CartButton/>
                </div>
            </Container>
        </header>
    )
}