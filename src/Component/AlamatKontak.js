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
                <h1 align="center">Kontak Kami</h1><br /><br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15841.143497621064!2d110.3014482!3d-6.9755592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97b3afe1b2104e70!2sSMK%20Bina%20Nusantara%20Semarang!5e0!3m2!1sid!2sid!4v1605768048575!5m2!1sid!2sid" 
                width="1230" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <br />
                <h3>SMK BINA NUSANTARA</h3>
                <p>(NSS: 402036316053, NPSN:  20328986)</p>
                <p><b>Alamat :</b> Jl. Kemantren No. 5 RT 04 RW 02 Kelurahan Wonosari Kecamatan Ngaliyan Semarang</p>
                <p><b>Telp :</b> (024) 8662971</p>
                <p><b>Email :</b> smkbinusasmg@yahoo.com</p>
                </Mui.Container>    
            </div>
        )
    }
}

export default Beranda;