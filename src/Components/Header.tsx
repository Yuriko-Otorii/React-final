import React from 'react'

type Props = {
    title: string;
}


const Header = ({title}: Props) => {
  return (
    <>
        <h2 style={{ marginBottom: "1rem" }}>{title}</h2>
    </>
  )
}

export default Header