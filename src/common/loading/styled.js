import styled,{ keyframes } from 'styled-components';

    const animate = keyframes`
        100% {
            transform: rotate(180deg) skew(360deg);
        }
    `;
    const animate2 = keyframes`
        100% {
            transform: rotate(-180deg) skew(-360deg);
        }
    `

export const LoadingContainer = styled.div`
    background: linear-gradient(90deg, #FF4E50 10%, #F9D423 90%);
    overflow: hidden;
    height: 100%;
    .loading{
        .loader {
            height: 40px;
            width: 40px;
            position: absolute;
            left: 50%;
            margin-left: -20px;
            top: 50%;
            margin-top: -20px;
            
            &:before,
            &:after {
                content: "";
                height: 40px;
                width: 40px;
                border: 8px solid rgba(255,255,255,.5);
                border-radius: 10px;
                position: absolute;
                top: 0;
            }
            
            &:before {
                animation: ${animate} 2s infinite linear;
            }
            
            &:after {
                animation: ${animate2} 2s infinite linear;
            }
            }
    }
`