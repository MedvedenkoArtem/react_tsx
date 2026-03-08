import styled from "@emotion/styled";

export const Text = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: #333;
    margin-bottom: 10px;
`;

export const PageWrapper = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    padding: 20px;
    border: 2px solid black;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ContainerUniniversytet = styled.div`
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 200px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }   
    li {
        font-size: 16px;
        color: #333;
        margin-bottom: 5px;
    }
`;