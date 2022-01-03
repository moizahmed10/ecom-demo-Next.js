import React from "react";
import * as style from "../styles/contactUs.module.scss";
import { Container } from "react-bootstrap";
import Image from 'next/image'
const about = () => {
  return (
    <div className={style.container}>
      <Container>
        <h1>About Us</h1>
        <div className={style.groupDiv}>
        <p>
          Group Member Count : 1 <br/>
          Name :Moiz Ahmed <br/>
          Roll #: 3601-FBAS-BsCs-F17
        </p>
        <Image src="/Profile-Image.png" width={500} height={500} alt="Profile Image" responsive={true}/>
        </div>
      </Container>
    </div>
  );
};

export default about;
