import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import Img1 from "../../images/svg-8.svg";
import "./Modal.css";

const Background = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 600px;
    height: 350px;
  }
  @media screen and (max-width: 480px) {
    width: 350px;
    height: 300px;
  }
`;
const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #4fc1f3;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #0078ac;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 9px;
  }

  h1 {
    margin-bottom: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
  }

  input {
    width: 80%;
    padding: 10px 10px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-family: "Encode Sans", sans-serif;

    @media screen and (max-width: 768px) {
      width: 60%;
    }

    @media screen and (max-width: 480px) {
      width: 75%;
    }
  }
  .errorMessage {
    color: red;
    font-size: 0.75em;
    display: relative;
  }

  .correctMessage {
    color: green;
    font-size: 0.75em;
    display: relative;
  }

  p {
    margin-bottom: 1rem;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
    @media screen and (max-width: 480px) {
      font-size: 11px;
      /* font-weight: 100; */
    }
  }

  /* button{
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none
    
} */
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const [title, setTitle] = useState("");
  const [state, setState] = useState("start");

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const animation = useSpring({
    config: {
      duration: 350,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
    setTitle("");
    setState("start");
  };

  const enviarDatos = () => {
    window.Email.send({
      SecureToken: "14c5e7d9-baa7-408a-8cdd-669e929b4302",
      From: `${title}`,
      To: `codanai666@gmail.com`,
      Subject: "Estoy interesado en su boletín",
      Body: `El correo es: ${title}
        `,
    }).then((message) => {
      if (
        message ===
        "The specified string is not in the form required for an e-mail address."
      ) {
        alert(
          "El correo no esta escrito en el formato requerido de un correo electronico."
        );
      }
      // else if(emailRegex.test(title)){
      //     alert("El correo se a enviado correctamente")
      //     setShowModal(false);
      // }
      else if (message === "OK") {
        // alert("El correo se a enviado correctamente.")
        setState("over");
        // setShowModal(false);
      } else if (title.length === 0) {
        alert("Favor de no dejar el campo vacio");
      }
    });
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        setTitle("");
        setState("start");
        // console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={Img1} alt="Foto de correo" />
              {state === "over" && (
                <ModalContent>
                  <h1>¡Listo!</h1>
                  <p>Has sido agregado a nuestra lista de correos.</p>
                  {/* <input type="email" placeholder="soyskywalker@gmail.com" onChange={event => setTitle(event.target.value)} />
                {title.length <=0  ? <span></span> : emailRegex.test(title) && title.length >0  ? <span className="correctMessage">Correo valido</span> : <span className="errorMessage">Correo electronico invalido</span>}
                <br/> */}
                  {/* <button className="buttonSubscribe" onClick={enviarDatos}>Join Now</button> */}
                </ModalContent>
              )}
              {state === "start" && (
                <ModalContent>
                  <h1>¿TE INTERESARÍA SUSCRIBIRTE A NUESTRO BOLETÍN?</h1>
                  <p>
                    Déjanos tu correo para que estes al día con nuestras
                    novedades y noticias.
                  </p>
                  <input
                    type="email"
                    placeholder="soyskywalker@gmail.com"
                    onChange={(event) => setTitle(event.target.value)}
                  />
                  {title.length <= 0 ? (
                    <span></span>
                  ) : emailRegex.test(title) && title.length > 0 ? (
                    <span className="correctMessage">Correo valido</span>
                  ) : (
                    <span className="errorMessage">
                      Correo electronico invalido
                    </span>
                  )}
                  <br />
                  <button className="buttonSubscribe" onClick={enviarDatos}>
                    Estoy interesado
                  </button>
                </ModalContent>
              )}
              {/* <ModalContent>
                <h1>¿TE INTERESARÍA SUSCRIBIRTE A NUESTRO BOLETÍN?</h1>
                <p>Déjanos tu correo para que estes al día con nuestras novedades y noticias.</p>
                <input type="email" placeholder="soyskywalker@gmail.com" onChange={event => setTitle(event.target.value)} />
                {title.length <=0  ? <span></span> : emailRegex.test(title) && title.length >0  ? <span className="correctMessage">Correo valido</span> : <span className="errorMessage">Correo electronico invalido</span>}
                <br/>
                <button className="buttonSubscribe" onClick={enviarDatos}>Join Now</button>
              </ModalContent> */}
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
