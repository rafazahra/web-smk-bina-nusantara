import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Beranda extends Component{
    render(){
        return(
            <div>
                <Mui.Container fixed>
                <br />
                <Mui.ButtonGroup color="secondary" aria-label="outlined secondary button group">
                    <Mui.Button href="/">Beranda</Mui.Button>
                    <Mui.Button href="/Sejarah">Sejarah</Mui.Button>
                    <Mui.Button href="/KepalaSekolah">Kepala Sekolah</Mui.Button>
                    <Mui.Button href="/Guru">Guru</Mui.Button>
                    <Mui.Button href="/Jurusan">Jurusan</Mui.Button>
                    <Mui.Button href="/AlamatKontak">Alamat Kontak</Mui.Button>
                </Mui.ButtonGroup>
                <hr color="#FF0099"></hr>
                <br />
                <Mui.Container fixed>
                <iframe width="1190" height="600" src="https://www.youtube.com/embed/lLDcL5Q7vJA" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br /><br />
                 <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                                <h4 align="center">Akuntansi</h4>
                                <p>
                                    Akuntansi merupakan kompetensi yg mempelajari proses mencatat, mengolah dan 
                                    menyajikan data yg berkaitan dengan keuangan.Untuk jurusan akuntansi di SMK, 
                                    siswa di berikan banyak teori mengeni akuntansi keuangan perusahaan jasa, 
                                    akuntansi keuangan perusahaan dagang dan perpajakan. Selain itu,siswa jurusan 
                                    akuntansi juga dibekali dengan komputerisasi akuntansi, misalnya menggunakan 
                                    program MYOB yang dapat menjadi nilai plus untuk lulusan SMK jurusan akuntansi.
                                </p><br />
                                <h4 align="center">Fasilitas :</h4>
                                <ul>
                                    <li>Bank Mini</li>
                                    <li>Lab Computer</li>
                                </ul>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                                <center><img src="/AKL.jpg" width="500" height="450"></img></center>
                            </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
                <br /><br />
                <Mui.Container fixed>
                 <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                            <center><img src="/TBSM.jpg" width="500" height="450"></img></center>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                            <h4 align="center">TBSM</h4>
                                <p>
                                    Tenik Bisnis Sepeda Motor adalah kompetensi yang mempelajari tentang perawatan, perbaikan, 
                                    dan modifikasi sepeda motor. Lulusannya mampu menjadi Teknisi yang berkarakter profesional, 
                                    ahli dan terampil dalam melakukan perawatan dan perbaikan mesin sepeda motor, chasis, 
                                    pemindahan tenaga, sistem kelistrikan sepeda motor, kreatif dalam modifikasi dan asesoris 
                                    sepeda motor,merancang dan membuat produk yang berbasis welding (pengelasan), dan menguasai 
                                    Otomotif Technology Computer mutakhir.
                                </p><br />
                                <h4 align="center">Fasilitas :</h4>
                                <ul>
                                    <li>Bengkel berstandar Astra Honda(AHM)</li>
                                </ul>
                            </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
                <br /><br />
                <Mui.Container fixed>
                 <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                            <h4 align="center">TKJ</h4>
                                <p>
                                    Teknik komputer dan jaringan adalah kompetensi keahlian yg mempelajari tentang teknologi 
                                    informasi dan jaringan. Di smk bina nusantara lulusannya mampu menjadi network engineer,
                                    software development dan juga bisa membuat film animasi. Pembelajarannya menggunakan 
                                    cyber class dan menggunakan peralatan yang canggih seperti IBD, VIRTUALISER, dan 
                                    menggunakan piranti multimedia lainnya. Bekerja sama dengan Intel Education untuk menjamin 
                                    kualitas pembelajaran sesuai dengan kebutuhan industri.
                                </p><br />
                                <h4 align="center">Fasilitas :</h4>
                                <ul>
                                    <li>Gedung milik sendiri</li>
                                    <li>Memiliki laboratorium canggih seperti laboratorium networking support</li>
                                    <li>Laboratorium hardware, software dan laboratorium multimedia.</li>
                                </ul>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                            <center><img src="/TKJ.jpg" width="500" height="450"></img></center>
                            </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
                <br /><br />
                <Mui.Container fixed>
                 <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                            <center><img src="/TB.jpg" width="500" height="450"></img></center>
                            </Mui.Grid>
                            <Mui.Grid item xs={12} sm={6}>
                            <h4 align="center">Tata Busana</h4>
                                <p>
                                    Tata Busana merupakan kompetensi yang mempelajari bagaimana mendesain busana yg sesuai dengan 
                                    bentuk tubuh serta karakteristik model atau seseorang. Tidak hanya mendesain,tapi juga membuat 
                                    pola hingga desain tersebut menjadi busana. Lulusan TB dapat mendapat menjadi seorang desainer 
                                    atau perancang busana,dapat pula membuka usaha sendiri berupa butik/konveksi/tailor.
                                </p><br />
                                <h4 align="center">Fasilitas :</h4>
                                <ul>
                                    <li>Mesin jahit industry</li>
                                    <li>Lab Garmen</li>
                                    <li>Peralatan jahit yang berkualitas</li>
                                    <li>Mesin pasang kancing</li>
                                    <li>Mesin Obras</li>
                                    <li>Mesin Lubang kancing</li>
                                    <li>Boneka jahit</li>
                                </ul>
                            </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
                <br />
                </Mui.Container>
            </div>
        )
    }
}

export default Beranda;