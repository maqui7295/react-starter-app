import React from 'react'


const Culture = () => (
    <div>
        <p>Share your history and culture with the world</p>
            <div className="row">
                <div className="col-12 col-lg-8">
                    <form action="">
                        <div className="form-group">
                               <input className={'form-control'} id={'content'} name={'title'} type="text"
                               placeholder={'title e.g. history of the benin people'}/>
                        </div>
                        <div className="form-group">
                                  <textarea name="content" id="content" className={'form-control'}
                                  cols="30" rows="10" placeholder={'we started the word'}></textarea>
                        </div>

                    </form>
                </div>
                <div className="col-12 col-lg-4">
                    <form action="">
                        <input type="file" placeholder={'upload images of your city'}/>
                    </form>
                </div>
            </div>
    </div>
);

export default Culture;