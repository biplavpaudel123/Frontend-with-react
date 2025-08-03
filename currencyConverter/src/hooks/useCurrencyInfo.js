import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const [updatedDate, setUpatedDate] = useState('')
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency])
                setUpatedDate(res.date)
            })
    }, [currency]);

    return [updatedDate, data];
}

export default useCurrencyInfo;