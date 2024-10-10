import styled from "styled-components";

export const Container = styled.table`
    margin-top: 4rem;
    max-width: 1120px;
    display: flex;
    justify-content: center;


    table {
        width: 100%;
    }

    tbody {
        background: var(--shape);
    }

    tbody td {
        padding: 1rem;
    }
`