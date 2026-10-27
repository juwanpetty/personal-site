import {
  IconBasketShoppingOutline18,
  IconMagnifierOutline18,
  IconMenu2Outline18,
} from "nucleo-ui-outline-18";

export default function MainGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <div className="px-4 pt-32 pb-24 sm:px-6 sm:pt-48">{children}</div> */}
      <Navigation />
      <div className="pt-32 pb-24 sm:pt-48">{children}</div>
    </div>
  );
}

function Navigation() {
  return (
    <header className="border-gray-4 sticky top-0 z-10 flex h-14 w-full items-center justify-between gap-4 border-b bg-white px-4 sm:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-6">
        <div className="flex items-center gap-2">
          <Logo className="text-gray-12 h-7" />
          {/* <div className="bg-gray-12 size-7 rounded-full" /> */}
          <span className="text-[15px] font-medium tracking-tight">Acme</span>
        </div>

        <nav className="flex items-center gap-0.5">
          <button className="text-gray-11 hover:bg-gray-3 hover:text-gray-12 flex h-8 cursor-pointer items-center rounded-full px-3 text-sm font-medium tracking-tight transition-colors">
            <span>Blocks</span>
          </button>
          <button className="text-gray-11 hover:bg-gray-3 hover:text-gray-12 flex h-8 cursor-pointer items-center rounded-full px-3 text-sm font-medium tracking-tight transition-colors">
            <span>Docs</span>
          </button>
          <button className="text-gray-11 hover:bg-gray-3 hover:text-gray-12 flex h-8 cursor-pointer items-center rounded-full px-3 text-sm font-medium tracking-tight transition-colors">
            <span>Themes</span>
          </button>
        </nav>
      </div>

      <div className="hidden shrink-0 xl:block">
        <div className="bg-gray-3 text-gray-11 flex h-9 w-100 cursor-pointer items-center rounded-full px-3">
          <div className="flex flex-1 items-center gap-x-1.5 text-sm font-medium">
            <IconMagnifierOutline18 className="size-4" />
            <span>Search</span>
          </div>

          <div></div>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
        <button className="flex size-8 items-center justify-center">
          <IconMagnifierOutline18 className="size-4" />
          <span className="sr-only">Search</span>
        </button>
        <button className="bg-gray-3 flex h-8 items-center rounded-full px-3.5 text-sm font-medium">
          <span>Get Pro</span>
        </button>
        <button className="flex size-8 items-center justify-center">
          <IconMenu2Outline18 className="size-4" />
          <span className="sr-only">Menu</span>
        </button>
      </div>
    </header>
  );
}

// function Navigation() {
//   return (
//     <header className="border-gray-4 bg-gray-1 sticky top-0 z-10 flex h-14 w-full items-center justify-between gap-4 border-b px-5.5">
//       <div className="flex h-full min-w-0 flex-1 items-center gap-4">
//         <Logo className="text-gray-12 h-7" />

//         <nav className="hidden h-full items-center gap-1 lg:flex">
//           <button className="text-gray-12 after:bg-gray-12 relative flex h-full cursor-pointer items-center px-4 text-sm font-medium after:absolute after:inset-x-0 after:-bottom-px after:h-0.5">
//             <span>Blog</span>
//           </button>
//           <button className="text-gray-11 flex h-full cursor-pointer items-center px-4 text-sm font-medium">
//             <span>Videos</span>
//           </button>
//           <button className="text-gray-11 flex h-full cursor-pointer items-center px-4 text-sm font-medium">
//             <span>Shop</span>
//           </button>
//         </nav>
//       </div>

//       <div className="hidden shrink-0 xl:block">
//         <div className="bg-gray-3 text-gray-11 flex h-9 w-100 cursor-pointer items-center rounded-full px-3">
//           <div className="flex flex-1 items-center gap-x-1.5 text-sm font-medium">
//             <IconMagnifierOutline18 className="size-4" />
//             <span>Search</span>
//           </div>

//           <div></div>
//         </div>
//       </div>

//       <div className="flex min-w-0 flex-1 items-center justify-end gap-2">
//         <div className="flex items-center gap-1 md:hidden">
//           <button className="text-gray-11 flex size-8 cursor-pointer items-center justify-center rounded-full">
//             <IconMagnifierOutline18 className="size-4" />
//             <span className="sr-only">Search</span>
//           </button>
//           <button className="text-gray-11 flex size-8 cursor-pointer items-center justify-center rounded-full">
//             <IconBasketShoppingOutline18 className="size-4" />
//             <span className="sr-only">Shop</span>
//           </button>
//           <button className="text-gray-11 flex size-8 cursor-pointer items-center justify-center rounded-full">
//             <IconMenu2Outline18 className="size-4" />
//             <span className="sr-only">Menu</span>
//           </button>
//         </div>

//         <div className="hidden items-center gap-2.5 md:flex">
//           <button className="bg-gray-3 text-gray-11 flex size-9 cursor-pointer items-center justify-center rounded-full xl:hidden">
//             <IconMagnifierOutline18 className="size-4" />
//             <span className="sr-only">Search</span>
//           </button>
//           <button className="bg-gray-3 text-gray-11 flex size-9 cursor-pointer items-center justify-center rounded-full">
//             <IconBasketShoppingOutline18 className="size-4" />
//             <span className="sr-only">Shop</span>
//           </button>
//         </div>

//         <div className="hidden items-center gap-2 md:flex">
//           <button className="bg-gray-11 flex h-9 cursor-pointer items-center justify-center rounded-full px-4 text-sm font-medium text-white">
//             <span className="">Subscribe</span>
//           </button>
//         </div>

//         <button className="bg-gray-3 text-gray-11 hidden size-9 cursor-pointer items-center justify-center rounded-full md:flex">
//           <IconMenu2Outline18 className="size-4" />
//           <span className="sr-only">Menu</span>
//         </button>
//       </div>
//     </header>
//   );
// }

function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="217"
      height="48"
      viewBox="0 0 217 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_163_2)">
        <mask
          id="mask0_163_2"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="48"
          height="48"
        >
          <path
            d="M36 0H12C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_163_2)">
          <path
            d="M36 0H12C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0Z"
            fill="#16A34A"
          />
          <path
            d="M20.4375 9.75C20.4375 15.6525 15.6525 20.4375 9.75 20.4375V27.5625H20.4375V38.25H27.5625C27.5625 32.3475 32.3475 27.5625 38.25 27.5625V20.4375H27.5625V9.75H20.4375Z"
            fill="white"
          />
        </g>
        <path
          d="M70.2 33.3599C68.08 33.3599 66.26 32.9099 64.74 32.0099C63.22 31.0899 62.05 29.8199 61.23 28.1999C60.41 26.5599 60 24.6699 60 22.5299C60 20.3899 60.41 18.4999 61.23 16.8599C62.05 15.2199 63.22 13.9399 64.74 13.0199C66.26 12.0999 68.08 11.6399 70.2 11.6399C72.72 11.6399 74.78 12.2699 76.38 13.5299C78 14.7699 79.01 16.5199 79.41 18.7799H75.18C74.92 17.6399 74.36 16.7499 73.5 16.1099C72.66 15.4499 71.54 15.1199 70.14 15.1199C68.2 15.1199 66.68 15.7799 65.58 17.0999C64.48 18.4199 63.93 20.2299 63.93 22.5299C63.93 24.8299 64.48 26.6399 65.58 27.9599C66.68 29.2599 68.2 29.9099 70.14 29.9099C71.54 29.9099 72.66 29.6099 73.5 29.0099C74.36 28.3899 74.92 27.5399 75.18 26.4599H79.41C79.01 28.6199 78 30.3099 76.38 31.5299C74.78 32.7499 72.72 33.3599 70.2 33.3599Z"
          fill="#0A0A0A"
        />
        <path
          d="M80.9191 32.9999V11.3999H84.7591V32.9999H80.9191Z"
          fill="#0A0A0A"
        />
        <path
          d="M93.7228 33.3599C92.3228 33.3599 91.0728 33.0199 89.9728 32.3399C88.8728 31.6599 88.0028 30.7299 87.3628 29.5499C86.7228 28.3699 86.4028 27.0299 86.4028 25.5299C86.4028 24.0299 86.7228 22.6999 87.3628 21.5399C88.0028 20.3599 88.8728 19.4399 89.9728 18.7799C91.0728 18.0999 92.3228 17.7599 93.7228 17.7599C94.8428 17.7599 95.8228 17.9699 96.6628 18.3899C97.5028 18.8099 98.1828 19.3999 98.7028 20.1599L98.9128 18.1199H102.543V32.9999H98.9428L98.7028 30.8699C98.2228 31.5299 97.5828 32.1099 96.7828 32.6099C96.0028 33.1099 94.9828 33.3599 93.7228 33.3599ZM94.5328 29.9999C95.7728 29.9999 96.7828 29.5899 97.5628 28.7699C98.3628 27.9299 98.7628 26.8599 98.7628 25.5599C98.7628 24.2599 98.3628 23.1999 97.5628 22.3799C96.7828 21.5399 95.7728 21.1199 94.5328 21.1199C93.3128 21.1199 92.3028 21.5299 91.5028 22.3499C90.7028 23.1699 90.3028 24.2299 90.3028 25.5299C90.3028 26.8299 90.7028 27.8999 91.5028 28.7399C92.3028 29.5799 93.3128 29.9999 94.5328 29.9999Z"
          fill="#0A0A0A"
        />
        <path
          d="M104.653 32.9999V18.1199H108.043L108.343 20.6399C108.803 19.7599 109.463 19.0599 110.323 18.5399C111.203 18.0199 112.233 17.7599 113.413 17.7599C115.253 17.7599 116.683 18.3399 117.703 19.4999C118.723 20.6599 119.233 22.3599 119.233 24.5999V32.9999H115.393V24.9599C115.393 23.6799 115.133 22.6999 114.613 22.0199C114.093 21.3399 113.283 20.9999 112.183 20.9999C111.103 20.9999 110.213 21.3799 109.513 22.1399C108.833 22.8999 108.493 23.9599 108.493 25.3199V32.9999H104.653Z"
          fill="#0A0A0A"
        />
        <path
          d="M127.945 33.3599C126.545 33.3599 125.295 33.0199 124.195 32.3399C123.095 31.6599 122.225 30.7299 121.585 29.5499C120.945 28.3699 120.625 27.0299 120.625 25.5299C120.625 24.0299 120.945 22.6999 121.585 21.5399C122.225 20.3599 123.095 19.4399 124.195 18.7799C125.295 18.0999 126.545 17.7599 127.945 17.7599C129.065 17.7599 130.045 17.9699 130.885 18.3899C131.725 18.8099 132.405 19.3999 132.925 20.1599V11.3999H136.765V32.9999H133.345L132.925 30.8699C132.445 31.5299 131.805 32.1099 131.005 32.6099C130.225 33.1099 129.205 33.3599 127.945 33.3599ZM128.755 29.9999C129.995 29.9999 131.005 29.5899 131.785 28.7699C132.585 27.9299 132.985 26.8599 132.985 25.5599C132.985 24.2599 132.585 23.1999 131.785 22.3799C131.005 21.5399 129.995 21.1199 128.755 21.1199C127.535 21.1199 126.525 21.5299 125.725 22.3499C124.925 23.1699 124.525 24.2299 124.525 25.5299C124.525 26.8299 124.925 27.8999 125.725 28.7399C126.525 29.5799 127.535 29.9999 128.755 29.9999Z"
          fill="#0A0A0A"
        />
        <path
          d="M146.105 33.3599C144.605 33.3599 143.275 33.0399 142.115 32.3999C140.955 31.7599 140.045 30.8599 139.385 29.6999C138.725 28.5399 138.395 27.1999 138.395 25.6799C138.395 24.1399 138.715 22.7699 139.355 21.5699C140.015 20.3699 140.915 19.4399 142.055 18.7799C143.215 18.0999 144.575 17.7599 146.135 17.7599C147.595 17.7599 148.885 18.0799 150.005 18.7199C151.125 19.3599 151.995 20.2399 152.615 21.3599C153.255 22.4599 153.575 23.6899 153.575 25.0499C153.575 25.2699 153.565 25.4999 153.545 25.7399C153.545 25.9799 153.535 26.2299 153.515 26.4899H142.205C142.285 27.6499 142.685 28.5599 143.405 29.2199C144.145 29.8799 145.035 30.2099 146.075 30.2099C146.855 30.2099 147.505 30.0399 148.025 29.6999C148.565 29.3399 148.965 28.8799 149.225 28.3199H153.125C152.845 29.2599 152.375 30.1199 151.715 30.8999C151.075 31.6599 150.275 32.2599 149.315 32.6999C148.375 33.1399 147.305 33.3599 146.105 33.3599ZM146.135 20.8799C145.195 20.8799 144.365 21.1499 143.645 21.6899C142.925 22.2099 142.465 23.0099 142.265 24.0899H149.675C149.615 23.1099 149.255 22.3299 148.595 21.7499C147.935 21.1699 147.115 20.8799 146.135 20.8799Z"
          fill="#0A0A0A"
        />
        <path
          d="M161.155 33.3599C159.835 33.3599 158.675 33.1499 157.675 32.7299C156.675 32.2899 155.875 31.6899 155.275 30.9299C154.675 30.1699 154.315 29.2899 154.195 28.2899H158.065C158.185 28.8699 158.505 29.3699 159.025 29.7899C159.565 30.1899 160.255 30.3899 161.095 30.3899C161.935 30.3899 162.545 30.2199 162.925 29.8799C163.325 29.5399 163.525 29.1499 163.525 28.7099C163.525 28.0699 163.245 27.6399 162.685 27.4199C162.125 27.1799 161.345 26.9499 160.345 26.7299C159.705 26.5899 159.055 26.4199 158.395 26.2199C157.735 26.0199 157.125 25.7699 156.565 25.4699C156.025 25.1499 155.585 24.7499 155.245 24.2699C154.905 23.7699 154.735 23.1599 154.735 22.4399C154.735 21.1199 155.255 20.0099 156.295 19.1099C157.355 18.2099 158.835 17.7599 160.735 17.7599C162.495 17.7599 163.895 18.1699 164.935 18.9899C165.995 19.8099 166.625 20.9399 166.825 22.3799H163.195C162.975 21.2799 162.145 20.7299 160.705 20.7299C159.985 20.7299 159.425 20.8699 159.025 21.1499C158.645 21.4299 158.455 21.7799 158.455 22.1999C158.455 22.6399 158.745 22.9899 159.325 23.2499C159.905 23.5099 160.675 23.7499 161.635 23.9699C162.675 24.2099 163.625 24.4799 164.485 24.7799C165.365 25.0599 166.065 25.4899 166.585 26.0699C167.105 26.6299 167.365 27.4399 167.365 28.4999C167.385 29.4199 167.145 30.2499 166.645 30.9899C166.145 31.7299 165.425 32.3099 164.485 32.7299C163.545 33.1499 162.435 33.3599 161.155 33.3599Z"
          fill="#0A0A0A"
        />
        <path
          d="M175.128 32.9999C173.568 32.9999 172.318 32.6199 171.378 31.8599C170.438 31.0999 169.968 29.7499 169.968 27.8099V21.3299H167.418V18.1199H169.968L170.418 14.1299H173.808V18.1199H177.828V21.3299H174.808C174.256 21.3299 173.808 21.7776 173.808 22.3299V27.8399C173.808 28.5599 173.958 29.0599 174.258 29.3399C174.578 29.5999 175.118 29.7299 175.878 29.7299H177.738V32.9999H175.128Z"
          fill="#0A0A0A"
        />
        <path
          d="M181.395 15.8099C180.695 15.8099 180.115 15.5999 179.655 15.1799C179.215 14.7599 178.995 14.2299 178.995 13.5899C178.995 12.9499 179.215 12.4299 179.655 12.0299C180.115 11.6099 180.695 11.3999 181.395 11.3999C182.095 11.3999 182.665 11.6099 183.105 12.0299C183.565 12.4299 183.795 12.9499 183.795 13.5899C183.795 14.2299 183.565 14.7599 183.105 15.1799C182.665 15.5999 182.095 15.8099 181.395 15.8099ZM179.475 32.9999V18.1199H183.315V32.9999H179.475Z"
          fill="#0A0A0A"
        />
        <path
          d="M185.523 32.9999V18.1199H188.913L189.213 20.6399C189.673 19.7599 190.333 19.0599 191.193 18.5399C192.073 18.0199 193.103 17.7599 194.283 17.7599C196.123 17.7599 197.553 18.3399 198.573 19.4999C199.593 20.6599 200.103 22.3599 200.103 24.5999V32.9999H196.263V24.9599C196.263 23.6799 196.003 22.6999 195.483 22.0199C194.963 21.3399 194.153 20.9999 193.053 20.9999C191.973 20.9999 191.083 21.3799 190.383 22.1399C189.703 22.8999 189.363 23.9599 189.363 25.3199V32.9999H185.523Z"
          fill="#0A0A0A"
        />
        <path
          d="M209.205 33.3599C207.705 33.3599 206.375 33.0399 205.215 32.3999C204.055 31.7599 203.145 30.8599 202.485 29.6999C201.825 28.5399 201.495 27.1999 201.495 25.6799C201.495 24.1399 201.815 22.7699 202.455 21.5699C203.115 20.3699 204.015 19.4399 205.155 18.7799C206.315 18.0999 207.675 17.7599 209.235 17.7599C210.695 17.7599 211.985 18.0799 213.105 18.7199C214.225 19.3599 215.095 20.2399 215.715 21.3599C216.355 22.4599 216.675 23.6899 216.675 25.0499C216.675 25.2699 216.665 25.4999 216.645 25.7399C216.645 25.9799 216.635 26.2299 216.615 26.4899H205.305C205.385 27.6499 205.785 28.5599 206.505 29.2199C207.245 29.8799 208.135 30.2099 209.175 30.2099C209.955 30.2099 210.605 30.0399 211.125 29.6999C211.665 29.3399 212.065 28.8799 212.325 28.3199H216.225C215.945 29.2599 215.475 30.1199 214.815 30.8999C214.175 31.6599 213.375 32.2599 212.415 32.6999C211.475 33.1399 210.405 33.3599 209.205 33.3599ZM209.235 20.8799C208.295 20.8799 207.465 21.1499 206.745 21.6899C206.025 22.2099 205.565 23.0099 205.365 24.0899H212.775C212.715 23.1099 212.355 22.3299 211.695 21.7499C211.035 21.1699 210.215 20.8799 209.235 20.8799Z"
          fill="#0A0A0A"
        />
      </g>
      <defs>
        <clipPath id="clip0_163_2">
          <rect width="217" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>

    // <svg
    //   fill="none"
    //   height="48"
    //   viewBox="0 0 40 48"
    //   width="40"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className={className}
    // >
    //   <g fill="currentColor">
    //     <path d="m28.6446 39.168c-.6032 1.3404-1.353 2.6531-2.2519 3.7888 7.4581-2.5137 12.9483-9.3054 13.5527-17.4568h-2.6549c-3.2399 0-5.8424 2.5861-6.369 5.7829-.4855 2.9468-1.2621 5.6301-2.2769 7.8851z" />
    //     <path d="m22.7724 25.5c3.3921 0 6.167 2.8299 5.5439 6.1643-1.3533 7.2424-4.5667 12.3357-8.3155 12.3357-4.7435 0-8.6299-8.1549-8.975-18.5z" />
    //     <path d="m30.9904 17.1502c.4961 3.2267 3.1106 5.8498 6.3752 5.8498h2.6107c-.4123-8.3729-5.9735-15.39183-13.5836-17.95683.8989 1.13575 1.6487 2.44843 2.2519 3.78878 1.0643 2.36505 1.8666 5.20115 2.3458 8.31825z" />
    //     <path d="m28.4165 16.8957c.5674 3.3176-2.1954 6.1043-5.5612 6.1043h-11.8434c.2344-10.5811 4.1693-19 8.9889-19 3.8447 0 7.1263 5.35721 8.4157 12.8957z" />
    //     <path d="m8.51131 23c.11359-5.4083 1.14536-10.3894 2.84579-14.16805.6031-1.34035 1.3529-2.65303 2.2519-3.78878-7.61011 2.565-13.171316 9.58393-13.5836094 17.95683z" />
    //     <path d="m.0562286 25.5c.6043994 8.1514 6.0946514 14.9431 13.5527714 17.4568-.899-1.1357-1.6488-2.4484-2.2519-3.7888-1.6479-3.6619-2.66781-8.4531-2.83264-13.668z" />
    //   </g>
    // </svg>
  );
}
