import React, { useState } from 'react';
import styled from 'styled-components';

const Tooltip = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <StyledWrapper>
      <div id="app">
        <div
          className="reference relative"
          onMouseEnter={() => setShowCard(true)}
          onMouseLeave={() => setShowCard(false)}
        >
          <p className="main-title text-black">
            Location <span className="hover-card italic text-[#226630]">Mumbai</span>, India
          </p>

          {showCard && (
            <div className="card absolute">
              <div className="cloud" />
              <div className="cloud" />
              <div className="cloud" />
              <div className="cloud" />
              <div className="relative inner-card">
                <div className="bg-map" />
                <div className="location absolute" />
                <div className="elements">
                  <div className="description relative">
                    <div className="blur-item absolute" />
                    <span className="main-title text-black">Mumbai</span>
                    <p className="second-title text-black">India</p>
                  </div>
                  <div className="details" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

    const StyledWrapper = styled.div`
    #app {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card {
        top: -100px;
        left: 15%;
        transition: transform 0.3s cubic-bezier(0.74, -0.03, 0.05, 1.24);
        width: 160px;
        height: 95px;
        will-change: transform;
        transform-origin: 50% 100%;
        transform: scale(1);
        filter: blur(0);
        background: white;
        border-radius: 18px;
        box-shadow:
        0 0 0 2px #b0dbbf,
        1px 4px 5px 4px #black;
        padding: 2px;
        overflow: hidden;
        animation: coolfadeIn 0.3s ease both;
    }

    .bg-map {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
        background-position: 15px -32px;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: ;
    }

    .elements {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .details {
        z-index: 1;
        margin-bottom: -10%;
        margin-top: -12%;
        flex: 1 1 0;
        background: #daecdd;
        filter: blur(6px);
    }

    .description {
        padding: 15px;
        z-index: 1;
    }

    .main-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: black;
    }

    .second-title {
        font-size: 0.9em;
        font-weight: 500;
        color: black;
    }

    .inner-card {
        position: relative;
        border-radius: calc(18px - 2%);
        height: 100%;
        width: 100%;
        border: 2px solid #2d2d2d45;
        background: #daecdd;
        overflow: hidden;
    }

    .blur-item {
        left: 0;
        top: 0;
        min-width: 60px;
        filter: blur(10px);
        background: #daecdd;
        z-index: -1;
        height: 110%;
    }

    .relative {
        position: relative;
    }

    .absolute {
        position: absolute;
    }

    .location {
        background-color: #226630;
        top: 24%;
        z-index: 1000;
        left: 60%;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        box-shadow: 0 0 10px 7px #c1c1c180;
        border: 5px solid white;
        animation: pulse 3s infinite;
    }

    @keyframes pulse {
        0% {
        transform: scale(0.95);
        box-shadow:
            0 0 0 0 rgba(72, 72, 72, 0.7),
            0 0 8px 5px #d9d9d980;
        }

        70% {
        transform: scale(1);
        box-shadow:
            0 0 0 10px rgba(72, 72, 72, 0),
            0 0 8px 5px #d9d9d980;
        }

        100% {
        transform: scale(0.95);
        box-shadow:
            0 0 0 0 rgba(72, 72, 72, 0),
            0 0 8px 5px #d9d9d980;
        }
    }

    @keyframes coolfadeIn {
        0% {
        filter: brightness(1) blur(10px);
        transform: scale(0.6);
        }

        100% {
        filter: brightness(1) blur(0px);
        transform: scale(1);
        }
    }

    @keyframes movingClouds {
        from {
        transform: translateX(-100px);
        }
        to {
        transform: translateX(100px);
        }
    }

    .cloud {
        z-index: 1;
        position: absolute;
        border-radius: 50%;
        animation-name: movingClouds;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }

    .cloud:nth-child(1) {
        animation-duration: 45s;
        height: 1em;
        width: 1.4em;
        top: 3.5em;
        left: 50%;
        filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
        drop-shadow(-0.625em 0.313em #ffffffae);
        background: linear-gradient(to top right, #ffffffae, #ffffffae);
        transition: 0.4s;
    }

    .cloud:nth-child(2) {
        animation-duration: 30s;
        top: 0.325em;
        right: -1em;
        width: 4.075em;
        height: 1.575em;
        background: #ebebebdb;
        filter: blur(0.425em) drop-shadow(-0.313em 0.812em #e0dfdfae)
        drop-shadow(-1.625em 0.812em #bbbbbbae) drop-shadow(-1em 0.063em #cfcfcfae);
    }

    .cloud:nth-child(3) {
        animation-duration: 60s;
        top: 2.45em;
        right: 4.938em;
        width: 1.075em;
        height: 0.575em;
        background: #ffffff;
        filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
        drop-shadow(-0.625em 0.313em #ffffffae);
        transition: 0.8s;
    }

    .cloud:nth-child(4) {
        animation-duration: 40s;
        top: 4.45em;
        right: 4.938em;
        width: 1.075em;
        height: 0.375em;
        background: #ffffff;
        filter: blur(0.125em) drop-shadow(0.438em 0.188em #ffffffae)
        drop-shadow(-0.625em 0.313em #ffffffae);
        transition: 0.8s;
    }
    `;

export default Tooltip;
