import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0A0B0A] text-[#EFE7D2] p-4 md:p-6">
      <div className="flex flex-col lg:flex-row gap-4 h-full">
        {/* Main Hero Section */}
        <div className="flex-1 relative rounded-2xl lg:rounded-r-[48px] overflow-hidden bg-black">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/2T5A8620.JPEG"
              alt="Snackers"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full min-h-[600px] lg:min-h-[800px]">
            {/* Navbar */}
            <nav className="m-6 md:m-12 inline-flex items-center gap-3 p-2 rounded-xl bg-[#0A0B0A] w-fit max-w-full">
              {/* Menu Toggle */}
              <button className="flex flex-col justify-center items-center gap-[5px] w-[41px] h-[41px] rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]">
                <div className="w-5 h-[1px] bg-[#E0D3C4]" />
                <div className="w-5 h-[1px] bg-[#E0D3C4]" />
                <div className="w-5 h-[1px] bg-[#E0D3C4]" />
              </button>

              {/* Logo */}
              <Link to="/">
                <img
                  src="/Recurso8.svg"
                  alt="Logo"
                  className="h-auto md:h-[38px] w-50 flex-shrink-0"
                />
              </Link>

              {/* Menu Items */}
              <div className="hidden md:flex items-center gap-1">
                <button className="px-3 py-3 rounded-lg text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase">
                  Menu
                </button>
                <button className="px-3 py-3 rounded-lg text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase">
                  About
                </button>
                <button className="px-3 py-3 rounded-lg border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)] text-[#E0D3C4] font-galliso text-xs font-normal leading-[130%] tracking-[1px] uppercase">
                  Book a Table
                </button>
              </div>
            </nav>

            {/* Hero Text */}
            <div className="mt-auto px-6 md:px-20 pb-12 md:pb-20">
              <h1 className="font-galliso text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] font-normal leading-[100%] tracking-[3px] uppercase text-[#EFE7D2] max-w-4xl">
                Snackers
                <br />

              </h1>
            </div>

            {/* Social Icons - Bottom Right */}
            <div className="absolute bottom-0 right-0 bg-[#0A0B0A] rounded-tl-3xl p-6 flex items-center gap-2">
              {/* Decorative rounded edges */}
              <div className="absolute -left-6 top-0 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V24C0 10.7452 10.7452 0 24 0H0Z" fill="#0A0B0A" />
                </svg>
              </div>
              <div className="absolute right-0 -top-6 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z"
                    fill="#0A0B0A"
                  />
                </svg>
              </div>

              {/* Social buttons */}
              <button className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5.76562C8.3603 5.76562 7.73497 5.95532 7.20308 6.31072C6.67119 6.66611 6.25663 7.17125 6.01183 7.76226C5.76702 8.35326 5.70297 9.00359 5.82777 9.63099C5.95257 10.2584 6.26062 10.8347 6.71295 11.287C7.16529 11.7394 7.7416 12.0474 8.36901 12.1722C8.99641 12.297 9.64674 12.233 10.2377 11.9882C10.8287 11.7434 11.3339 11.3288 11.6893 10.7969C12.0447 10.265 12.2344 9.6397 12.2344 9C12.2344 8.14219 11.8936 7.31951 11.287 6.71295C10.6805 6.10639 9.85781 5.76562 9 5.76562ZM9 11.3906C8.52718 11.3906 8.06498 11.2504 7.67184 10.9877C7.2787 10.725 6.97229 10.3517 6.79135 9.91485C6.61041 9.47802 6.56307 8.99735 6.65531 8.53361C6.74755 8.06988 6.97524 7.64391 7.30957 7.30957C7.64391 6.97524 8.06988 6.74755 8.53361 6.65531C8.99735 6.56307 9.47802 6.61041 9.91485 6.79135C10.3517 6.97229 10.725 7.2787 10.9877 7.67184C11.2504 8.06498 11.3906 8.52718 11.3906 9C11.3888 9.63346 11.1363 10.2404 10.6884 10.6884C10.2404 11.1363 9.63346 11.3888 9 11.3906ZM12.0938 2.10938H5.90625C4.89926 2.10937 3.93351 2.5094 3.22145 3.22145C2.5094 3.93351 2.10938 4.89926 2.10938 5.90625V12.0938C2.10937 13.1007 2.5094 14.0665 3.22145 14.7785C3.93351 15.4906 4.89926 15.8906 5.90625 15.8906H12.0938C13.1007 15.8906 14.0665 15.4906 14.7785 14.7785C15.4906 14.0665 15.8906 13.1007 15.8906 12.0938V5.90625C15.8906 4.89926 15.4906 3.93351 14.7785 3.22145C14.0665 2.5094 13.1007 2.10938 12.0938 2.10938ZM15.0469 12.0938C15.0469 12.877 14.7357 13.6281 14.1819 14.1819C13.6281 14.7357 12.877 15.0469 12.0938 15.0469H5.90625C5.12303 15.0469 4.37189 14.7357 3.81808 14.1819C3.26426 13.6281 2.95312 12.877 2.95312 12.0938V5.90625C2.95312 5.12303 3.26426 4.37189 3.81808 3.81808C4.37189 3.26426 5.12303 2.95312 5.90625 2.95312H12.0938C12.877 2.95312 13.6281 3.26426 14.1819 3.81808C14.7357 4.37189 15.0469 5.12303 15.0469 5.90625V12.0938ZM13.3594 5.34375C13.3594 5.48282 13.3181 5.61876 13.2409 5.73439C13.1636 5.85001 13.0538 5.94013 12.9253 5.99335C12.7968 6.04657 12.6555 6.06049 12.5191 6.03336C12.3827 6.00623 12.2574 5.93927 12.1591 5.84093C12.0607 5.7426 11.9938 5.61732 11.9666 5.48092C11.9395 5.34453 11.9534 5.20315 12.0066 5.07468C12.0599 4.9462 12.15 4.83638 12.2656 4.75912C12.3812 4.68186 12.5172 4.64062 12.6562 4.64062C12.8427 4.64062 13.0216 4.7147 13.1534 4.84657C13.2853 4.97843 13.3594 5.15727 13.3594 5.34375Z"
                    fill="#EFE7D2"
                  />
                </svg>
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1719 9C16.1719 7.58154 15.7513 6.19493 14.9632 5.01552C14.1751 3.83611 13.055 2.91688 11.7446 2.37405C10.4341 1.83123 8.99205 1.68921 7.60084 1.96593C6.20963 2.24266 4.93173 2.92572 3.92872 3.92872C2.92572 4.93173 2.24266 6.20963 1.96593 7.60084C1.68921 8.99205 1.83123 10.4341 2.37405 11.7446C2.91688 13.055 3.83611 14.1751 5.01552 14.9632C6.19493 15.7513 7.58154 16.1719 9 16.1719C10.9015 16.17 12.7246 15.4138 14.0692 14.0692C15.4138 12.7246 16.17 10.9015 16.1719 9ZM9.42188 15.3141V10.5469H11.25C11.3619 10.5469 11.4692 10.5024 11.5483 10.4233C11.6274 10.3442 11.6719 10.2369 11.6719 10.125C11.6719 10.0131 11.6274 9.90581 11.5483 9.82669C11.4692 9.74758 11.3619 9.70313 11.25 9.70313H9.42188V7.875C9.42372 7.53991 9.55766 7.21906 9.79461 6.98211C10.0316 6.74516 10.3524 6.61122 10.6875 6.60938H11.8125C11.9244 6.60938 12.0317 6.56493 12.1108 6.48581C12.1899 6.4067 12.2344 6.29939 12.2344 6.1875C12.2344 6.07561 12.1899 5.96831 12.1108 5.88919C12.0317 5.81008 11.9244 5.76563 11.8125 5.76563H10.6875C10.1286 5.76748 9.59318 5.99031 9.198 6.3855C8.80281 6.78068 8.57998 7.31613 8.57813 7.875V9.70313H6.75C6.63811 9.70313 6.53081 9.74758 6.45169 9.82669C6.37258 9.90581 6.32813 10.0131 6.32813 10.125C6.32813 10.2369 6.37258 10.3442 6.45169 10.4233C6.53081 10.5024 6.63811 10.5469 6.75 10.5469H8.57813V15.3141C6.94 15.2046 5.40853 14.4628 4.30714 13.2453C3.20574 12.0277 2.62064 10.4298 2.6754 8.78896C2.73016 7.1481 3.42048 5.59274 4.6006 4.45135C5.78071 3.30996 7.35822 2.67189 9 2.67189C10.6418 2.67189 12.2193 3.30996 13.3994 4.45135C14.5795 5.59274 15.2699 7.1481 15.3246 8.78896C15.3794 10.4298 14.7943 12.0277 13.6929 13.2453C12.5915 14.4628 11.06 15.2046 9.42188 15.3141Z"
                    fill="#EFE7D2"
                  />
                </svg>
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2617 4.90075C17.2299 4.82419 17.1763 4.75869 17.1075 4.71242C17.0388 4.66615 16.9579 4.64117 16.875 4.64059H14.6531C14.3785 4.13619 13.9745 3.71401 13.4827 3.41743C12.9909 3.12086 12.4289 2.96059 11.8547 2.95309C10.9918 2.94934 10.1626 3.28756 9.54855 3.89373C8.93448 4.4999 8.58554 5.32464 8.57811 6.18747V6.79919C5.59686 6.08903 3.13592 3.66325 3.1078 3.64216C3.05359 3.58865 2.98591 3.55081 2.91194 3.53266C2.83796 3.51451 2.76045 3.51673 2.68763 3.53908C2.61482 3.56143 2.54941 3.60308 2.49835 3.6596C2.4473 3.71613 2.4125 3.78542 2.39764 3.86013C1.78592 7.207 2.79139 9.44294 3.74061 10.7297C4.24405 11.4186 4.86248 12.0156 5.56874 12.4945C4.47889 13.8164 2.68592 14.5054 2.66483 14.5125C2.60493 14.5345 2.55092 14.5701 2.50702 14.6165C2.46311 14.6628 2.4305 14.7186 2.41171 14.7797C2.39175 14.8392 2.38582 14.9025 2.39435 14.9647C2.40289 15.0269 2.42567 15.0863 2.46092 15.1383C2.53124 15.2437 3.2203 16.1718 5.62499 16.1718C10.5258 16.1718 14.625 12.382 15.0187 7.51638L17.1703 5.35778C17.2313 5.30064 17.2729 5.22587 17.2893 5.14392C17.3057 5.06197 17.296 4.97695 17.2617 4.90075ZM14.3086 7.03122C14.2354 7.10419 14.1927 7.20219 14.1891 7.30544C13.9008 11.8054 10.139 15.3281 5.62499 15.3281C4.64764 15.3281 4.02186 15.1593 3.64921 14.9906C4.44374 14.5898 5.74452 13.8023 6.53905 12.607C6.5707 12.5574 6.592 12.502 6.60167 12.444C6.61134 12.386 6.60917 12.3266 6.5953 12.2695C6.58031 12.211 6.55315 12.1564 6.51559 12.1091C6.47803 12.0619 6.43091 12.0231 6.37733 11.9953C6.36327 11.9953 5.30858 11.4468 4.39452 10.1953C3.30467 8.70466 2.87577 6.88356 3.11483 4.78122C4.14139 5.65309 6.35624 7.29841 8.92967 7.72731C8.99024 7.73882 9.05262 7.73668 9.11225 7.72105C9.17189 7.70542 9.2273 7.67669 9.27444 7.63696C9.32158 7.59722 9.35927 7.54748 9.38477 7.49135C9.41027 7.43522 9.42295 7.37411 9.42186 7.31247V6.18747C9.42743 5.55028 9.68495 4.9412 10.1381 4.49327C10.5914 4.04533 11.2034 3.79496 11.8406 3.79684C12.301 3.80349 12.7499 3.94219 13.1338 4.19646C13.5177 4.45073 13.8205 4.80988 14.0062 5.23122C14.0383 5.30701 14.0922 5.37155 14.1611 5.41663C14.2299 5.4617 14.3107 5.48527 14.393 5.48434H15.8555L14.3086 7.03122Z"
                    fill="#EFE7D2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Grid of Cards */}
        <div className="w-full lg:w-[420px] flex flex-col gap-4">
          {/* Menu Card */}
          <div className="relative flex-1 min-h-[200px] lg:min-h-[334px] rounded-2xl overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5e29dd9ac4b7e94504c94e905ee6ec1b7d7e2c0a?width=840"
              alt="Menu"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute bottom-0 right-0 bg-[#0A0B0A] rounded-tl-3xl p-6">
              {/* Decorative rounded edges */}
              <div className="absolute -left-6 top-0 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V24C0 10.7452 10.7452 0 24 0H0Z" fill="#0A0B0A" />
                </svg>
              </div>
              <div className="absolute right-0 -top-6 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z"
                    fill="#0A0B0A"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-galliso text-base font-normal leading-[100%] tracking-[1px] uppercase text-[#EFE7D2]">
                  Menu
                </span>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7625 8.26252L9.2625 12.7625C9.22803 12.797 9.1871 12.8243 9.14206 12.843C9.09702 12.8616 9.04875 12.8712 9 12.8712C8.95125 12.8712 8.90298 12.8616 8.85794 12.843C8.8129 12.8243 8.77197 12.797 8.7375 12.7625C8.70303 12.728 8.67568 12.6871 8.65703 12.6421C8.63837 12.597 8.62877 12.5488 8.62877 12.5C8.62877 12.4513 8.63837 12.403 8.65703 12.358C8.67568 12.3129 8.70303 12.272 8.7375 12.2375L12.5938 8.37502H2.5C2.40054 8.37502 2.30516 8.33551 2.23483 8.26518C2.16451 8.19485 2.125 8.09947 2.125 8.00002C2.125 7.90056 2.16451 7.80518 2.23483 7.73485C2.30516 7.66452 2.40054 7.62502 2.5 7.62502H12.5938L8.7375 3.76252C8.66788 3.6929 8.62877 3.59847 8.62877 3.50002C8.62877 3.40156 8.66788 3.30713 8.7375 3.23752C8.80712 3.1679 8.90154 3.12878 9 3.12878C9.09846 3.12878 9.19288 3.1679 9.2625 3.23752L13.7625 7.73752C13.798 7.77137 13.8264 7.8121 13.8457 7.85722C13.865 7.90234 13.875 7.95092 13.875 8.00002C13.875 8.04911 13.865 8.09769 13.8457 8.14281C13.8264 8.18793 13.798 8.22866 13.7625 8.26252Z"
                      fill="#EFE7D2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Reservation Card */}
          <div className="relative flex-1 min-h-[200px] lg:min-h-[334px] rounded-2xl overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5ec0305773e1aeaf4e2e22e513ec76a693502020?width=914"
              alt="Reservation"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute bottom-0 right-0 bg-[#0A0B0A] rounded-tl-3xl p-6">
              {/* Decorative rounded edges */}
              <div className="absolute -left-6 top-0 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V24C0 10.7452 10.7452 0 24 0H0Z" fill="#0A0B0A" />
                </svg>
              </div>
              <div className="absolute right-0 -top-6 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z"
                    fill="#0A0B0A"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-galliso text-base font-normal leading-[100%] tracking-[1px] uppercase text-[#EFE7D2]">
                  Reservation
                </span>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7625 8.26252L9.2625 12.7625C9.22803 12.797 9.1871 12.8243 9.14206 12.843C9.09702 12.8616 9.04875 12.8712 9 12.8712C8.95125 12.8712 8.90298 12.8616 8.85794 12.843C8.8129 12.8243 8.77197 12.797 8.7375 12.7625C8.70303 12.728 8.67568 12.6871 8.65703 12.6421C8.63837 12.597 8.62877 12.5488 8.62877 12.5C8.62877 12.4513 8.63837 12.403 8.65703 12.358C8.67568 12.3129 8.70303 12.272 8.7375 12.2375L12.5938 8.37502H2.5C2.40054 8.37502 2.30516 8.33551 2.23483 8.26518C2.16451 8.19485 2.125 8.09947 2.125 8.00002C2.125 7.90056 2.16451 7.80518 2.23483 7.73485C2.30516 7.66452 2.40054 7.62502 2.5 7.62502H12.5938L8.7375 3.76252C8.66788 3.6929 8.62877 3.59847 8.62877 3.50002C8.62877 3.40156 8.66788 3.30713 8.7375 3.23752C8.80712 3.1679 8.90154 3.12878 9 3.12878C9.09846 3.12878 9.19288 3.1679 9.2625 3.23752L13.7625 7.73752C13.798 7.77137 13.8264 7.8121 13.8457 7.85722C13.865 7.90234 13.875 7.95092 13.875 8.00002C13.875 8.04911 13.865 8.09769 13.8457 8.14281C13.8264 8.18793 13.798 8.22866 13.7625 8.26252Z"
                      fill="#EFE7D2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Our Restaurant Card */}
          <div className="relative flex-1 min-h-[200px] lg:min-h-[334px] rounded-2xl overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c817eb199fd1a34bf08440c990fcdbdaecf0d9a9?width=1092"
              alt="Our Restaurant"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute bottom-0 right-0 bg-[#0A0B0A] rounded-tl-3xl p-6">
              {/* Decorative rounded edges */}
              <div className="absolute -left-6 top-0 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V24C0 10.7452 10.7452 0 24 0H0Z" fill="#0A0B0A" />
                </svg>
              </div>
              <div className="absolute right-0 -top-6 w-6 h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 24V0C24 13.2548 13.2548 24 0 24H24Z"
                    fill="#0A0B0A"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-galliso text-base font-normal leading-[100%] tracking-[1px] uppercase text-[#EFE7D2]">
                  Our Restaurant
                </span>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(239,231,210,0.15)] bg-[rgba(24,24,24,0.5)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7625 8.26252L9.2625 12.7625C9.22803 12.797 9.1871 12.8243 9.14206 12.843C9.09702 12.8616 9.04875 12.8712 9 12.8712C8.95125 12.8712 8.90298 12.8616 8.85794 12.843C8.8129 12.8243 8.77197 12.797 8.7375 12.7625C8.70303 12.728 8.67568 12.6871 8.65703 12.6421C8.63837 12.597 8.62877 12.5488 8.62877 12.5C8.62877 12.4513 8.63837 12.403 8.65703 12.358C8.67568 12.3129 8.70303 12.272 8.7375 12.2375L12.5938 8.37502H2.5C2.40054 8.37502 2.30516 8.33551 2.23483 8.26518C2.16451 8.19485 2.125 8.09947 2.125 8.00002C2.125 7.90056 2.16451 7.80518 2.23483 7.73485C2.30516 7.66452 2.40054 7.62502 2.5 7.62502H12.5938L8.7375 3.76252C8.66788 3.6929 8.62877 3.59847 8.62877 3.50002C8.62877 3.40156 8.66788 3.30713 8.7375 3.23752C8.80712 3.1679 8.90154 3.12878 9 3.12878C9.09846 3.12878 9.19288 3.1679 9.2625 3.23752L13.7625 7.73752C13.798 7.77137 13.8264 7.8121 13.8457 7.85722C13.865 7.90234 13.875 7.95092 13.875 8.00002C13.875 8.04911 13.865 8.09769 13.8457 8.14281C13.8264 8.18793 13.798 8.22866 13.7625 8.26252Z"
                      fill="#EFE7D2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
