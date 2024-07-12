import { useState, useEffect } from "react"


const useRestaurantaMenu = (resid) => {
    let [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        feactMenu()
    }, []);
    const feactMenu = async () => {

        let datas = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3066525&lng=80.4365402&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`)
        let json = await datas.json()

        setResInfo(json.data);


    }
    return resInfo
}

export default useRestaurantaMenu