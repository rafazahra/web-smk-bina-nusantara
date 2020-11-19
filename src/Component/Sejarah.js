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
                <center><img src="/binus.jpg"></img></center>
                <br />
                <Mui.Container fixed>
                 <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                                <h4 align="center">Sejarah</h4>
                              <p>
                                SMK BINA NUSANTARA SEMARANG adalah sekolah menenengah kejuruan yang berdiri 
                                pada tanggal 18 mei 2010 dibawah Yayasan Bina Nusantara yang di ketuai 
                                Drs.Sugiyono,M.M dan Sugiyarto,S.Kom, M.M.
                              </p>
                              <p>
                                SMK BINA NUSANTARA SEMARANG beralamat di jl.Kemantren No.5 wonosari Ngaliyan Semarang. 
                                Dengan luas lokasi  4004 m2, sarana dan prasarana yang memadai, suasana belajar yang 
                                nyaman karena berada di tengah perkamampungan masyarakat yang jauh dari kebisingan.
                              </p>
                              <p>
                                Jumlah siswa SMK BINA NUSANTARA mengalami peningkatan dari tahun ketahun. Mayoritas 
                                siswa berasal dari lingkungan sekitar, Kota Semarang, dan luar Semarang. Siswa berasal 
                                dari keluarga dengan perekonomian menengah kebawah.
                              </p>
                            </Mui.Grid>
                            
                            <Mui.Grid item xs={12} sm={6}>
                                <h4 align="center">Tujuan SMK Bina Nusantara</h4>
                                <p>
                                    <ol>1. Mempersiapkan tamatan yang memiliki kepribadian dan berakhlak mulia sebagai 
                                        tenaga kerja tingkat menengah yang kompeten sesuai program keahlian pilihannya.</ol>
                                    <ol>2. Membekali peserta didik untuk berkarir, mandiri yang mampu beradaptasi 
                                        dilingkungan kerja sesuai bidangnya dan mampu menghadapi perubahan yang 
                                        terjadi di masyarakat.</ol>
                                    <ol>3. Membekali peserta didik sikap profesional untuk mengembangkan diri dan 
                                        mampu berkompetisi di tingkat nasional, regional dan internasional.</ol>
                                </p>
                            </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>

                </Mui.Container>    
            </div>
        )
    }
}

export default Beranda;