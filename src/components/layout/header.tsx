import React from "react";
import Container from "./container";
import Logo from "../basic/logo";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex items-center ">
            <div>
              <Button variant="ghost">سفارش اینترنتی</Button>
            </div>
            <div className="mx-3">
              <Button variant="ghost">قوانین سایت</Button>
            </div>
            <div>
              <Button className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="size-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                ورود / عضویت
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
