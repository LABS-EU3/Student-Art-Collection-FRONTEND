import React, { useState, useEffect } from 'react'
import { axiosWithBase } from '../../AxiosCustom';
import { connect } from 'react-redux';
import EditModal from './EditModal'

function ArtForSale (props) {
    const [artForSale, setArtForSale] = useState(null);
    const id = props.loggedInUser._id;
    console.log(id)

    useEffect(() => {
        axiosWithBase()
        .get(`/art/selling/${id}`)
        .then(res => {
            setArtForSale(res.data)
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
    }, []) 
    
    const editArt = (art) => {
        console.log(art, 'hi')
        return(
            <EditModal art={art} />
        )
    }
    return(
        <div>
            {
                artForSale ? artForSale.length ? artForSale.map(art => {
                    return(
                        <div>
                            <img src={art.picture} alt="art" />
                            <button onClick={() => editArt(art)}>Edit</button>
                        </div>
                    )
                }) : <h1> no art </h1>
                : <h2>spinner</h2>
            }
        </div>
    )
}

export default connect((state) => state)(ArtForSale);