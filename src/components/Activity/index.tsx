import {useEffect, useState} from 'react'
import styles from './styles.module.scss'

export default function Activity() {
    const [activities ,setActivity] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    function loadActivity() {
        setLoading(true)
        fetch("http://www.boredapi.com/api/activity")
            .then((response) => response.json())
            .then((data) => {
                setActivity([...activities, data]);
                setLoading(false)
            })
            
    }
    

    useEffect( () => {
        loadActivity()
    }, [])

    if(activities.length === 0) {
        return <p>Loading...</p>
    }

    return (
        <>
            <main className={styles.main}>
                <ul>
                    {activities.map((activity) => {
                        return <li key={activity.key}>{activity.activity}</li>
                    })}
                </ul>
                <button disabled={isLoading} onClick={loadActivity}>Load Another</button>
            </main>
        </>
    )
}
