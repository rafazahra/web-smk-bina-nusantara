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
                <hr color="#FF0099"></hr><br />
                <h1 align="center"><u>SMK BINA NUSANTARA SEMARANG</u></h1>
                <center><img src="/logo smk.jpg" width="250" height="230"></img></center>
                <br />
                <Mui.Container fixed>
                 <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                              <h4 align="center">VISI</h4>
                              <center><p><i>"Menyiapkan Tenaga Terampil Menengah yang Siap Berkompetisi dan Siap Kerja"</i></p></center>
                            </Mui.Grid>
                            
                            <Mui.Grid item xs={12} sm={6}>
                                <h4 align="center">MISI</h4>
                                <ol>
                                    <li>Menyiapkan lulusan yang siap mengisi pasaran kerja sesuai dengan bidang profesinya</li>  
                                    <li>Meningkatkan ketrampilan wirausaha</li>
                                    <li>Menyiapkan ketrampilan sesuai jurusannya</li>
                                </ol>
                            </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>

                </Mui.Container>    
            </div>
        )
    }
}

export default Beranda;