import React from 'react'


export default class Music extends React.Component {

    constructor(){
        super();

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);


    }

    componentDidMount(){
        this.setState({value: 'audio'});
        document.getElementById('customRadioInline1').setAttribute('checked', 'true')
    }

    handleChange(e) {
        this.setState({value: e.target.value });
    }

    render() {


        return (
            <div>
                <div className="mt-3">
                    <p className={'my-5'}>Share your songs, beats and music videos here</p>
                    <form action="">
                        <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={this.handleChange} type="radio" value={'audio'} id="customRadioInline1" name="customRadioInline1" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="customRadioInline1">Audio</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input onChange={this.handleChange} type="radio" value={'video'} id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
                        <label className="custom-control-label" htmlFor="customRadioInline2">Video</label>
                    </div>
                    </form>

                </div>
                <div className="row py-5">

                    { this.state.value === 'audio' ?

                        (<div className="col-12">
                               <div className="row">
                                   <div className="col-md-6 mb-3" style={{borderRight:'1px solid #ddd'}}>
                                       <div className="my-3">
                                           <p>Upload song here</p>
                                           <form action="">
                                               <input type="text" className={'form-control'}/>
                                               <input type="text" className={'form-control'}/>
                                               <input type="text" className={'form-control'}/>
                                               <input type="text" className={'form-control'}/>
                                           </form>
                                       </div>
                                       <div className="my-4">
                                           <p>Upload beats here</p>
                                           <form action="">
                                               <input type="text" className={'form-control'}/>
                                               <input type="text" className={'form-control'}/>
                                               <input type="text" className={'form-control'}/>
                                               <input type="text" className={'form-control'}/>
                                           </form>
                                       </div>

                                   </div>
                                   <div className="col-md-6 text-center">
                                       <p>My Song list</p>

                                       <ul className={'nav flex-column'} >
                                           <li>First song</li>
                                           <li>second song</li>
                                           <li>third song</li>
                                           <li>Fourth song</li>
                                           <li>Fifth song</li>
                                       </ul>

                                   </div>
                               </div>
                         </div> ):

                        (<div className="col-12">
                            <p>Upload Link to youtube video</p>
                            <form action="">
                               <input type="text" className={'form-control'}/>
                               <input type="text" className={'form-control'}/>
                               <input type="text" className={'form-control'}/>
                               <input type="text" className={'form-control'}/>
                            </form>
                        </div>)
                    }

                </div>
            </div>
        );
    }

}



