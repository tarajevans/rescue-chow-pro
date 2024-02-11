import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded bg-grey-223">
            <div className="flex flex-row items-center justify-center space-x-20">
                <Link href="/WhoWeAre" className="link link-hover">
                    Who We Are
                </Link>
                <Link href="/GetInTouch" className="link link-hover">
                    Contact
                </Link>
                <Link href="/OrderNow" className="link link-hover">
                    Shop
                </Link>
                <Link href="/find-a-rescue" className="link link-hover">
                    Find A Rescue
                </Link>
            </div>
            <div>
                <div className="flex flex-row items-center justify-center space-x-8 mt-4">
                    <Link
                        href="https://www.facebook.com/rescuechow"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-8"
                                src="https://rescue-chow-pro.s3.amazonaws.com/icons8-facebook-circled-64.png"
                                alt="facebook link"
                            />
                        </div>
                    </Link>
                    <Link
                        href="https://www.instagram.com/rescuechow/?igshid=YmMyMTA2M2Y%3D&fbclid=IwAR3H3uyGxsTjFZ_PK75EsFEtzQEwC-N-tuapZ31VMLyFdB1_7bsw0OZePsg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-8"
                                src="https://rescue-chow-pro.s3.amazonaws.com/icons8-instagram-old-50.png"
                                alt="instagram link"
                            />
                        </div>
                    </Link>
                    <div className="flex-shrink-0">
                        <Link
                            href="https://www.linkedin.com/in/terasa-hill-19042818"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="h-8 w-8"
                                src="https://rescue-chow-pro.s3.amazonaws.com/icons8-linkedin-circled-64.png"
                                alt="linkedin link"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>
                    Copyright &copy;2022 Rescue Chow Powered by T.J.S.S
                    Production
                </p>
                <p>
                    <a
                        target="_blank"
                        href="https://icons8.com/icon/2rUtNpDNO0co/shopping-cart"
                    >
                        Shopping Cart
                    </a>{" "}
                    icon by{" "}
                    <a target="_blank" href="https://icons8.com">
                        Icons8
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
