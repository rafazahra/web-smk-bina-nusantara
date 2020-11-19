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

                <h1 align="center">Guru SMK Bina Nusantara</h1><br /><br />
                <Mui.Container fixed>
                 <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/septy.jpg"></img>
                                <p>Septi Muslikhah</p>
                                <p>Waka Kurikulum</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/ari.jpg"></img>
                                <p>Ari Dwi Handoko,S.Pd</p>
                                <p>Waka Kesiswaan</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/khusnul.jpg"></img>
                                <p>Khusnul Khotima,S.Pd</p>
                                <p>Waka Sarana dan Prasarana</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/askuriati.jpg"></img>
                                <p>Askuriat,S.E</p>
                                <p>Waka SDM</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/arga.jpg"></img>
                                <p>Arga Dian SW,S.Kom</p>
                                <p>K3 Teknik Komputer dan Jaringan</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/linda.jpg" width="225" height="300"></img>
                                <p>Isti Malinda,S.Pd</p>
                                <p>K3 Tata Busana</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/wahyu.jpeg" width="225" height="300"></img>
                                <p>Wahyu Ambikawati,S.Pd</p>
                                <p>K3 Teknik Bisnis Sepeda Motor</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/novita.jpeg" width="225" height="300"></img>
                                <p>Novita Widyastutik,S.Pd</p>
                                <p>K3 Akuntansi dan Keuangan Lembaga</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/dian.jpeg" width="225" height="300"></img>
                                <p>Dianing Ratri O,S.Pd</p>
                                <p>Sekretaris Jurusan Teknik Komputer dan Jaringan</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/soimatun.jpeg" width="225" height="300"></img>
                                <p>Soimatun,S.Pd</p>
                                <p>Sekretaris Jurusan Tata Busana</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/tri-rabisan.jpg" width="225" height="300"></img>
                                <p>Tri Rabisan,S.Pd</p>
                                <p>Sekretaris Jurusan Teknik Bisnis Sepeda Motor</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/vega.jpeg" width="225" height="300"></img>
                                <p>Vega Nurmalita,S.Pd</p>
                                <p>Sekretaris Jurusan Akuntansi dan Keuangan Lembaga</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/taqi.jpeg" width="225" height="300"></img>
                                <p>Taqius SA,S.Kom</p>
                                <p>Ka. Lab Jurusan Teknik Komputer dan Jaringan</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/aroem.jpeg" width="225" height="300"></img>
                                <p>Aroem Santi L,S.Pd</p>
                                <p>Ka. Lab Jurusan Tata Busana</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/nonok.jpg" width="225" height="300"></img>
                                <p>Nonok Royin Wibowo</p>
                                <p>Ka. Lab Sekretaris Jurusan Teknik Bisnis Sepeda Motor</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/indah.jpeg" width="225" height="300"></img>
                                <p>Indah Noviani,S.Pd</p>
                                <p>Guru Mapel Bahasa Indonesia</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                            <img src="/ida.jpeg" width="225" height="300"></img>
                                <p>Ida Fahru Roziyah,S.Pd</p>
                                <p>Guru Mapel Bahasa Jawa</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                            <img src="/indahdwi.jpeg" width="225" height="300"></img>
                                <p>Indah Dwi Putri Banjarsari,S.Pd</p>
                                <p>Guru Mapel Matematika</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                            <img src="/arif.jpeg" width="225" height="300"></img>
                                <p>Arif Adi Wijaya,S.Pd</p>
                                <p>Guru Mapel Penjasorkes</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                            <img src="/tito.jpeg" width="225" height="300"></img>
                                <p>Tito Dwi Yulianto,S.Pd</p>
                                <p>Guru Mapel Bahasa Inggris</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                            <img src="/sholeh.jpeg" width="225" height="300"></img>
                                <p>Muhammad Sholeh,S.Pd.I</p>
                                <p>Guru Mapel Agama Islam</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                            <img src="/siti-masruroh.jpeg" width="225" height="300"></img>
                                <p>Siti Masruroh,A.Md</p>
                                <p>Guru Mapel Bahasa Jepang</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                            <img src="/ruri.jpeg" width="225" height="300"></img>
                                <p>Ruri Ayuning Lati,S.Pd</p>
                                <p>Guru BK</p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                            <img src="/rufi.jpeg" width="225" height="300"></img>
                                <p>Rufi Tri Irianti,S.Pd</p>
                                <p>Guru Mapel Pendidikan Karakter</p>
                            </Mui.Grid>
                            </Mui.Grid>
                </Mui.Container>
                </Mui.Container>
                
                
                </div>
            
        )
    }
}

export default Beranda;