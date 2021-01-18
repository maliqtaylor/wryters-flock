import React, {useState, useEffect} from 'react';
import * as entriesAPI  from '../../services/entry-api'
import EntryCard from '../../components/EntryCard/EntryCard'


const EntryIndex = (props) => {

    const [entries, setEntries] = useState([])


    useEffect(() => {
        (async function(){
            const entries = await entriesAPI.index()
            setEntries(entries)
        })();
    },[])
    
    return(
        <>
            <div>   
                {entries.map(entry =>
                    <EntryCard
                        key={entry._id}
                        entry={entry}
                        user={props.user} 
                    />
                )}
            </div>
        </>
    )
}

export default EntryIndex;