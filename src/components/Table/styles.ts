import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    max-width: 1120px;
    display: flex;
    justify-content: center;
    font-size: 600;


    table {
        width: 100%;
        color: var(--text-body);
    }

    table tr th {
        padding: 1.5rem;
    }

    table .title{
        text-align: left;
        background: none;
    }

    table .item {
        color: var(--text-title);
    }

    table .valor {
        color: var(--green);
    }

    table tr {
        background: var(--shape);
    }

    table tr td {
        padding: 1rem;
        border-radius: 5px;
    }
`