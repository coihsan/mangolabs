import Image from 'next/image'

export default function Footer (){
    return (

            <footer className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-neutral-950 to-transparent lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer">
                Developent By{' '}
                coihsan
              </a>
          </footer>

    )
}