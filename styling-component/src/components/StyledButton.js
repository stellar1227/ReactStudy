import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    border:1px solid red;
    padding:1rem;
    border-radius:3px;
`;

const StyledButton = ({children, ...rest}) => {
    return (
        <Wrapper {...rest}>
            {children}
        </Wrapper>
    );
};

export default StyledButton;