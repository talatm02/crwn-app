import React from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import './shoppage.styles.scss';

class ShopPage extends React.Component {
    constructor(){
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shoppage">
                {
                    collections.map(({id, ...otherCollectionProps})=>(
                        <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;