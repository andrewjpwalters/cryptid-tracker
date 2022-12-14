function Cryptid({ name, img_url, description }) {
    return (
        <div>
            <p>{name}</p>
            <img src={img_url} alt="" />
            <p>{description}</p>
        </div>
    )
}

export default Cryptid