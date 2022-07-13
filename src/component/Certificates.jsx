import React from 'react'


function Certificate({ number, certificate, setcertificate, name, link, certified, desc }) {
    return (
        <div className="form experience">
            <h2>Certificate #{number} </h2>
            <div className="input-box">
                <span className="details">Name</span>
                <input type="text" placeholder="Certificate Name" value={name} onChange={e => setcertificate({ ...certificate, name: e.target.value })} />
            </div>
            <div className="input-box">
                <span className="details">Link</span>
                <input type="text" placeholder="Certificate Link" value={link} onChange={e => setcertificate({ ...certificate, link: e.target.value })} />
            </div>
            <div className="input-box">
                <span className="details">Certified by</span>
                <input type="text" placeholder="Certified by" value={certified} onChange={e => setcertificate({ ...certificate, certified: e.target.value })} />
            </div>
            <div className="input-box textarea">
                <span className="details">Description</span>
                <textarea type="text" placeholder="Description" value={desc} onChange={e => setcertificate({ ...certificate, desc: e.target.value })} />
            </div>
        </div>
    )
}
function Certificates({ certificate, setcertificate, name, link,certified, desc ,certificate2,setcertificate2,name2,link2,certified2,desc2,certificate3,setcertificate3,name3,link3,certified3,desc3,certificate4,setcertificate4,name4,link4,certified4,desc4}) {
    return (
        <div className="form">
            <Certificate number={1} certificate={certificate} setcertificate={setcertificate} name={name} link={link} certified={certified} desc={desc} />
            <Certificate number={2} certificate={certificate2} setcertificate={setcertificate2} name={name2} link={link2} certified={certified2} desc={desc2} />
            <Certificate number={3} certificate={certificate3} setcertificate={setcertificate3} name={name3} link={link3} certified={certified3} desc={desc3}/>
            <Certificate number={4} certificate={certificate4} setcertificate={setcertificate4} name={name4} link={link4} certified={certified4} desc={desc4}/>
        </div>
    )
}

export default Certificates
