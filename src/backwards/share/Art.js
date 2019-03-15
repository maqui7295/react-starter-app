import React from 'react'


const Art = () => (
            <div>

                <div className="row my-4 justify-content-lg-between">
                    <div className="col-md-6"><p>Where to find you and your skills</p></div>
                    <div className="col-md-6">Too many fields? Lets auto detect your location</div>
                </div>

                <form action="">
                    <div className="form-row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="art-category" className={'text-info'}>Select a category</label>
                                <select name="art-category" id="art-category" className={'form-control'}>
                                <option value="" disabled={'disabled'}>Choose art</option>
                                <option value="">painting</option>
                                <option value="">sculpture</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="art-price" className={'text-info'}>Price (USD)</label>
                                <select name="art-price" id="art-price" className={'form-control'}>
                                   <option value="" disabled={'disabled'}>Free</option>
                                   <option value="">0</option>
                                   <option value="">1</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                             <div className="form-group">
                                 <p className={'text-info mb-2'}>upload art images (max: 10)</p>
                                 <div className="custom-file ">
                                     <label className="custom-file-label" htmlFor="art-files">Choose file(s)</label>
                                     <input type="file" className="custom-file-input" id="art-files"
                                            multiple={'multiple'}/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="col-md-6 col-lg-3">
                            <div className="form-group">
                               <label htmlFor="art-country">Select Country</label>
                               <select name="art-country" id="art-country" className={'custom-select'}>
                                  <option value="">Country</option>
                                  <option value="">Nigeria</option>
                               </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="form-group">
                               <label htmlFor="art-state">Select State</label>
                            <select name="art-state" id="art-state" className={'custom-select'}>
                                <option value="">State</option>
                                <option value="">Nigeria</option>
                            </select>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="art-city">Select City</label>
                            <select name="art-city" id="art-city" className={'custom-select'}>
                                <option value="">Benin</option>
                                <option value="">Nigeria</option>
                            </select>
                            </div>


                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="form-group">
                                <label htmlFor="art-area">Select Area</label>
                            <select name="art-area" id="art-area" className={'custom-select'}>
                                <option value="">Benin</option>
                                <option value="">Nigeria</option>
                            </select>
                            </div>

                        </div>
                    </div>
                    <div className={'form-row'}>
                        <label htmlFor="art-work">Work address</label>
                        <textarea name="art-work" id="art-work" cols="30" className={'form-control'}
                                  rows="5" placeholder={'e.g. 24 gavi street off dynamo road, benin'}></textarea>
                    </div>
                </form>
            </div>
);

export default Art;