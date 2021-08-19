import ItemDetail from "./ItemDetail"
const { useEffect, useState } = require ("react");

export default function ItemDetailContainer(){
    const [productos, setProductos] = useState([])
    useEffect(() => {
        new Promise((res, rej) => {

            const data = [
              {
                id: "1",
                title: "Monitor",
                descripcion: "Monitor 144Hz",
                precio: "$15000",
                pictureUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.casanissei.com%2Far%2Fmonitor-curvo-msi-optix-mag321cqr-32-rgb-144hz-wqhd&psig=AOvVaw1rmEm39LmNHINuxGUJ_qY9&ust=1628630955605000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKD5q5_xpPICFQAAAAAdAAAAABAH",
              },
              {
                id: "2",
                title: "GPU",
                descripcion: "NVIDIA GEFORCE GTX 1650",
                precio: "$75000",
                pictureUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pm-pulse.com%2Fides.asp%3Fiid%3D101948335%26cid%3D118&psig=AOvVaw39AXCjgineNmMyL-oZf0bx&ust=1629498798978000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIj71ZuSvvICFQAAAAAdAAAAABAH",
              }
            ];
            setTimeout(() => res(data), 2000);
          })
            .then((dataResolve) => {
              console.log("data Resolve", dataResolve);
              setProductos(dataResolve);
            })
            
        }, []);
        return (
            <div>
              {productos.map((cadaProducto) => (
                <ItemDetail detail={cadaProducto}></ItemDetail>
              ))}
            </div>
        );
}