import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-white border-t-2">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="py-8 border-b border-gray-100 lg:order-last lg:border-b-0 lg:border-l lg:py-16 lg:pl-16">
            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden w-10 h-1 bg-teal-500 rounded lg:block"></span>

              <div>
                <h2 className="text-2xl font-medium text-gray-900">
                  Request a Demo
                </h2>

                <p className="max-w-lg mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, harum deserunt nesciunt praesentium, repellendus
                  eum perspiciatis ratione pariatur a aperiam eius numquam
                  doloribus asperiores sunt.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pr-16">
            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-4">
              <div>
                <p className="font-medium text-black">Tokopedia</p>

                <nav aria-label="Footer Navigation - Services" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Tentang Tokopedia
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Hak Kekayaan Intelektual
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Karir
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Blog
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Bridestory
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-medium text-black">Beli</p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Tagihan & Top Up
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Tukar Tambah Handphone
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Tokopedia COD
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-medium text-black">Jual</p>

                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Pusat Edukasi Seller
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Mitra Toppers
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75">
                        Daftar Official Store
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <p className="font-medium text-black">Ikuti Kami</p>

                <nav aria-label="Footer Navigation - Company" className="mt-6 ">
                  <ul className="space-y-4 text-sm ">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 pr-3">
                        <FacebookIcon />
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 pr-3">
                        <TwitterIcon />
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 transition hover:opacity-75 pr-3">
                        <InstagramIcon />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-100">
              <nav aria-label="Footer Navigation - Support">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-500 transition hover:opacity-75">
                      Cookies
                    </a>
                  </li>
                </ul>
              </nav>

              <p className="mt-8 text-xs text-gray-500">
                &copy; 2022. Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
