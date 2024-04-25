import { useState, useEffect, useMemo } from 'react'

function App() {
  const [exchangeData, setExchange] = useState({});
  const [exchangeData2, setExchange2] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange({
      returns: 100
    });
  }, []);

  useEffect(() => {
    setExchange2({
      returns: 100
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      })
    }, 5000);
  }, [])

  const cryptoReturens = useMemo(() => {
    console.log("re runs happend to crypto state")
    return exchangeData.returns + exchangeData2.returns;
  }, [exchangeData, exchangeData2]);

  const incomeTaxt = (cryptoReturens + bankData.income) * 0.3;

  return (
    <>
      <div>Hi there your income taxt returns are {incomeTaxt}</div>
    </>
  )
}

export default App
