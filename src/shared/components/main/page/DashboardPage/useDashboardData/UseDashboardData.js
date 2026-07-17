import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'

export function FetchMetrics() {
    const gold = ref(null)
    const usdRate = ref(null) 
    let intervalId = null
    const fetchData = async () => {
        try {
            const goldRes = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=pax-gold&vs_currencies=usd,rub')
            gold.value = goldRes.data['pax-gold']

            const rateRes = await axios.get('https://open.er-api.com/v6/latest/USD')
            usdRate.value = rateRes.data.rates.RUB
        }catch (error) {
            console.log('Ошибка', error);
        }
    }
    onMounted(() => {
    fetchData() 
    intervalId = setInterval(fetchData, 60000) 
    })
    onUnmounted(() => {
    clearInterval(intervalId) 
    })
    return { gold, usdRate }
}

export function useMarketData() {
  const metals = ref(null)        
  const currencies = ref(null)    
  const loading = ref(true)
  let intervalId = null

  const fetchData = async () => {
    try {
      // 1. Драгметаллы (PAX Gold, Silver)
      const metalsRes = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=pax-gold,pax-gold&vs_currencies=usd,rub,eur,gbp'
      )
      
      // 2. Курсы валют
      const ratesRes = await axios.get('https://open.er-api.com/v6/latest/USD')
      
      metals.value = metalsRes.data
      currencies.value = ratesRes.data.rates
      loading.value = false
      
      console.log('✅ Данные обновлены:', new Date().toLocaleTimeString())
    } catch (error) {
      console.error('❌ Ошибка загрузки:', error)
      loading.value = false
    }
  }

  onMounted(() => {
    fetchData()
    intervalId = setInterval(fetchData, 60000) // Каждую минуту
  })

  onUnmounted(() => {
    clearInterval(intervalId)
  })

  return { metals, currencies, loading }
}