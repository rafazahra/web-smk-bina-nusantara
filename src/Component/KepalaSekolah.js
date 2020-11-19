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
                 <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                                <center><p>Kepala SMK Bina Nusantara Semarang</p>
                                <img src="/eka.jpg"></img>
                                <p>Eka Aribawa, S.Pd.I</p></center>
                            </Mui.Grid>
                            
                            <Mui.Grid item xs={12} sm={6}>
                                <p><b>Assalamu’alaikum Warahmatullahi Wabarakaatuh.</b></p>
                                <p>
                                    SMK Bina Nusantara mempunyai visi untuk menjadi salah satu SMK swasta di Kota 
                                    Semarang yang tidak hanya dapat dihitung keanggotaannya namun juga diperhitungkan 
                                    keberadaannya. Terbukti dengan usaha peningkatan kualitas yang dibuktikan dengan 
                                    kelengkapan sarana prasarana yang menunjang pembelajaran dan pelatihan ketrampilan 
                                    siswa secara maksimal. Didukung dengan tenaga pendidik dan kependidikan yang 
                                    berkompeten di bidangnya untuk kemajuan ketrampilan dan karakter siswa-siswanya.
                                </p>
                                <p>
                                    Dari bidang Kurikulum, SMK Bina Nusantara telah berhasil melaksanakan program 
                                    link and match dengan Industri  sesuai dengan kompetensi keahlian yang kami miliki. 
                                    Salah satunya adalah dilaksanakannya kelas Industri yang bekerjasama dengan 
                                    Astra Honda Motor, Intel Education, PT. Telkom, Excellent Computer dan 
                                    PT. Apparel One Indonesia, PT. Alfaria Trijaya Tbk dan juga Santren Koding.
                                </p>
                                <p>
                                    Dari bidang Kesiswaan, SMK Bina Nusantara menerapkan metode pembinaan yang bertujuan 
                                    untuk peningkatan karakter siswa untuk menjadi sumber daya yang kompetitif dan 
                                    berakhlakul karimah.
                                </p>
                                <p>
                                    BKK Mitra Binusa adalah organisasi legal yang secara khusus memasarkan lulusan 
                                    untuk dapat disalurkan di Industri, dan secara umum membantu warga lingkungan 
                                    sekitar atas informasi lowongan pekerjaan yang ada. Kami berharap dengan adanya 
                                    website ini dapat memberikan informasi atas keberadaan SMK Bina Nusantara Semarang.
                                </p>
                                <p><b>Wa'alaikumsalam warahmatullahi wabarakatuh.</b></p>
                            </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
                </Mui.Container>    
            </div>
        )
    }
}

export default Beranda;