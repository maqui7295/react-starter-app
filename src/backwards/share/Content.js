import React from 'react';
import Culture from './Culture'
import Art from './Art'
import Music from './Music'


function ContentType(value) {
    switch(value){
        case 'history-culture':
            return <Culture/>
        case 'art':
            return <Art/>
        case 'music':
            return <Music />
        case 'dance':
            return 'this is the dance page'
        case 'drama':
            return 'this is the drama page'
        default:
            return 'Sorry this page does not exist'
    }
}

const Content = ({ match }) => (
    <section className={'section-padding'}>
        <div className="container">
            <h3 className={'text-capitalize'}>{match.params.topicId}</h3>
            { ContentType(match.params.topicId) }
        </div>
    </section>
)

export default Content;
