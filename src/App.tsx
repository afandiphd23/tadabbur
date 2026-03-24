import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HandHeart, Compass, ScrollText, User, Star, ArrowRight,
  Heart, Lock, VenetianMask, BookOpen, AlertTriangle, DoorOpen,
  HelpCircle, Globe, Target, Scale, Building, MapPin, Shield,
  Users, Coffee, Home, Swords, ChevronRight, ChevronLeft,
  Coins, Zap, Lightbulb, Sparkles, Scale as ScaleIcon, Gavel,
  Gem, Flame, Anchor, Layers, CloudRain, Sun, Moon, Eye,
  Wind, Waves, Feather, Bird, Mountain, Leaf, Infinity, History,
  MessageSquare, Trophy
} from 'lucide-react';

const SectionHeader = ({ title, className = "" }: { title: string, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className={`bg-primary-100 dark:bg-primary-900/30 px-6 py-2 rounded-full font-serif font-bold text-primary-900 dark:text-primary-100 text-sm shadow-sm inline-block border border-primary-200/50 dark:border-primary-700/30 ${className}`}
  >
    {title}
  </motion.div>
);

const Card = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`relative glass-card p-6 pt-10 h-full group ${className}`}
  >
    {title && (
      <div className="absolute -top-4 left-6 bg-accent-500 text-white px-5 py-2 rounded-xl font-serif font-bold text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">
        {title}
      </div>
    )}
    <div className="relative z-10">
      {children}
    </div>
  </motion.div>
);

const KaabaIcon = () => (
  <div className="w-14 h-14 bg-slate-900 dark:bg-black rounded-lg relative flex items-center justify-center shadow-xl shrink-0 overflow-hidden">
    <div className="absolute top-2 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400"></div>
    <div className="absolute top-5 left-0 right-0 h-0.5 bg-accent-600/50"></div>
    <div className="absolute bottom-0 right-3 w-4 h-5 border-t-2 border-l-2 border-r-2 border-accent-500 rounded-t-md opacity-80"></div>
    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
  </div>
);

export default function App() {
  const [currentJuz, setCurrentJuz] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderJuz1 = () => (
    <>
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 1</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Fatihah - Al-Baqarah: 141</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
            Pintu masuk dan kerangka lengkap<br/>kehidupan seorang Muslim.
          </p>
        </div>
        
        {/* Formula Jalan Lurus */}
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">
            Formula<br/>Jalan Lurus
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Heart className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Ibadah</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <User className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              <span className="text-xs font-medium">Tawakkal</span>
            </div>
            <ArrowRight className="w-6 h-6 text-amber-600" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 flex items-center justify-center">
                <Compass className="w-6 h-6 text-slate-800" />
              </div>
              <span className="text-xs font-medium">Jalan Lurus</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 1">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">3 Tema Besar Juz 1</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HandHeart className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Hubungan dengan Allah</span>
              </li>
              <li className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Peta Hidayah</span>
              </li>
              <li className="flex items-start gap-3">
                <ScrollText className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-snug">Sejarah Manusia<br/><span className="text-xs text-slate-500 font-normal">(Terima/Tolak Petunjuk)</span></span>
              </li>
            </ul>
          </Card>

          <div>
            <SectionHeader title="Al-Fatihah (Asas Hidayah)" className="mb-4" />
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Rumusan Al-Fatihah</h3>
            <div className="flex justify-between items-start gap-2">
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <HandHeart className="w-8 h-8 text-amber-700" />
                <span className="text-xs font-medium leading-tight">Mengenal<br/>Allah (Rabb)</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <User className="w-8 h-8 text-teal-700" />
                <span className="text-xs font-medium leading-tight">Mengenal Diri<br/>(Hamba)</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <Star className="w-8 h-8 text-amber-500" />
                <span className="text-xs font-medium leading-tight">Mengenal<br/>Arah Hidup<br/>(Hidayah)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 space-y-10">
          <Card title="Profil Manusia & Misi Khalifah">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">3 Jenis Manusia</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#1e7465] text-white rounded-xl p-4 relative shadow-sm">
                <div className="absolute -top-3 right-4 bg-white rounded-full p-1.5 shadow-sm">
                  <Heart className="w-4 h-4 text-[#1e7465]" fill="currentColor" />
                </div>
                <h4 className="font-bold text-center mb-2 border-b border-white/20 pb-2 leading-tight">
                  Mukmin<br/><span className="text-xs font-normal text-teal-100">(Beriman/Taat)</span>
                </h4>
                <p className="text-xs text-center text-teal-50">Beriman ghaib, solat, infaq, yakin akhirat.</p>
              </div>
              <div className="bg-[#1e3a5f] text-white rounded-xl p-4 relative shadow-sm">
                <div className="absolute -top-3 right-4 bg-white rounded-full p-1.5 shadow-sm">
                  <Lock className="w-4 h-4 text-[#1e3a5f]" />
                </div>
                <h4 className="font-bold text-center mb-2 border-b border-white/20 pb-2 leading-tight">
                  Kafir<br/><span className="text-xs font-normal text-blue-100">(Hati Tertutup/Ego)</span>
                </h4>
                <p className="text-xs text-center text-blue-50">Hati, pendengaran, dan penglihatan terkunci.</p>
              </div>
              <div className="bg-[#4a6b8c] text-white rounded-xl p-4 relative shadow-sm">
                <div className="absolute -top-3 right-4 bg-white rounded-full p-1.5 shadow-sm">
                  <VenetianMask className="w-4 h-4 text-[#4a6b8c]" />
                </div>
                <h4 className="font-bold text-center mb-2 border-b border-white/20 pb-2 leading-tight">
                  Munafik<br/><span className="text-xs font-normal text-slate-200">(Menipu/Penyakit Hati)</span>
                </h4>
                <p className="text-xs text-center text-slate-100">Mengaku beriman tetapi menipu dan merosak.</p>
              </div>
            </div>

            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Misi Manusia (Kisah Adam)</h3>
            <div className="flex flex-col md:flex-row justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
              <div className="flex items-start gap-3 flex-1">
                <BookOpen className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Mengangkat kepentingan ilmu</span>
              </div>
              <div className="flex items-start gap-3 flex-1">
                <AlertTriangle className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Waspada godaan syaitan</span>
              </div>
              <div className="flex items-start gap-3 flex-1">
                <DoorOpen className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Sentiasa membuka pintu taubat</span>
              </div>
            </div>
          </Card>

          <Card title="Cermin Sejarah & Model Ikutan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">4 Amaran dari Bani Israel</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Jangan kufur nikmat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Jangan banyak soal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Amal ilmu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Jangan gila dunia</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Model Muslim (Nabi Ibrahim)</h3>
                <div className="flex gap-4 items-start">
                  <KaabaIcon />
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <User className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">Peribadi yang tunduk sepenuhnya</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">Tauhid tulen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HandHeart className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">Taat tanpa banyak soal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-teal-500">
                "Dan mohonlah pertolongan (kepada Allah) dengan sabar dan solat. Dan (solat) itu sungguh berat, kecuali bagi orang-orang yang khusyuk." (Al-Baqarah: 45)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ayat ini mengajar kita bahawa sabar dan solat adalah dua sayap kekuatan mukmin. Khusyuk adalah kunci yang meringankan beban ibadah.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Bacalah Surah Al-Baqarah, sesungguhnya mengambilnya adalah keberkatan dan meninggalkannya adalah kerugian." (HR. Muslim)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Hadis ini menekankan kekuatan rohani yang ada dalam Surah Al-Baqarah sebagai pelindung dan sumber berkat bagi rumah tangga.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Star className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Tadabbur Al-Fatihah dalam setiap rakaat solat.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Star className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Muhasabah sifat munafik dalam diri.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Star className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Membaca kisah Nabi Ibrahim & pembinaan Kaabah.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="col-span-1 lg:col-span-12 mt-4">
          <SectionHeader title="Rumusan 3 Mesej Utama" className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Target className="w-8 h-8 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Arah & Misi Hidup:</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Hidup mesti berarah (hidayah) dan manusia adalah khalifah bermisi.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Scale className="w-8 h-8 text-slate-700 dark:text-slate-300 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Tanggungjawab Peribadi:</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Keselamatan akhirat bergantung pada amal sendiri, bukan keturunan atau bangsa.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Building className="w-8 h-8 text-amber-700 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Bahaya Ilmu Tanpa Amal:</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Mengetahui kebenaran tanpa mengamalkannya hanya membawa kehancuran.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz2 = () => (
    <>
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 2</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Baqarah: 142 - 252</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
            Pembinaan Ummah & Kerangka Perundangan Islam.
          </p>
        </div>
        
        {/* Formula Ummah Terbaik */}
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">
            Formula<br/>Ummah Terbaik
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Star className="w-6 h-6 text-amber-500" />
              <span className="text-xs font-medium">Iman</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Target className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Amal</span>
            </div>
            <ArrowRight className="w-6 h-6 text-amber-600" />
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Taqwa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 2">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">3 Tema Besar Juz 2</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kiblat & Identiti Ummah</span>
              </li>
              <li className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Perundangan & Akhlak</span>
              </li>
              <li className="flex items-start gap-3">
                <Swords className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-snug">Jihad & Pengorbanan<br/><span className="text-xs text-slate-500 font-normal">(Ujian Kesetiaan)</span></span>
              </li>
            </ul>
          </Card>

          <div>
            <SectionHeader title="Kiblat (Asas Kesatuan)" className="mb-4" />
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Rumusan Perubahan Kiblat</h3>
            <div className="flex justify-between items-start gap-2">
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <MapPin className="w-8 h-8 text-amber-700" />
                <span className="text-xs font-medium leading-tight">Mengenal Kiblat<br/>(Kaabah)</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <Users className="w-8 h-8 text-teal-700" />
                <span className="text-xs font-medium leading-tight">Mengenal Umat<br/>(Wasatan)</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <AlertTriangle className="w-8 h-8 text-amber-500" />
                <span className="text-xs font-medium leading-tight">Mengenal Ujian<br/>(Ketaatan)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 space-y-10">
          <Card title="Profil Ummah & Syariat">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">3 Bidang Utama Perundangan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#1e7465] text-white rounded-xl p-4 relative shadow-sm">
                <div className="absolute -top-3 right-4 bg-white rounded-full p-1.5 shadow-sm">
                  <Coffee className="w-4 h-4 text-[#1e7465]" />
                </div>
                <h4 className="font-bold text-center mb-2 border-b border-white/20 pb-2 leading-tight">
                  Ibadah<br/><span className="text-xs font-normal text-teal-100">(Puasa & Haji)</span>
                </h4>
                <p className="text-xs text-center text-teal-50">Membersihkan jiwa dan mengukuhkan kesatuan.</p>
              </div>
              <div className="bg-[#1e3a5f] text-white rounded-xl p-4 relative shadow-sm">
                <div className="absolute -top-3 right-4 bg-white rounded-full p-1.5 shadow-sm">
                  <Home className="w-4 h-4 text-[#1e3a5f]" />
                </div>
                <h4 className="font-bold text-center mb-2 border-b border-white/20 pb-2 leading-tight">
                  Keluarga<br/><span className="text-xs font-normal text-blue-100">(Nikah & Cerai)</span>
                </h4>
                <p className="text-xs text-center text-blue-50">Membina unit asas masyarakat yang stabil.</p>
              </div>
              <div className="bg-[#4a6b8c] text-white rounded-xl p-4 relative shadow-sm">
                <div className="absolute -top-3 right-4 bg-white rounded-full p-1.5 shadow-sm">
                  <Scale className="w-4 h-4 text-[#4a6b8c]" />
                </div>
                <h4 className="font-bold text-center mb-2 border-b border-white/20 pb-2 leading-tight">
                  Sosial<br/><span className="text-xs font-normal text-slate-200">(Infaq & Qisas)</span>
                </h4>
                <p className="text-xs text-center text-slate-100">Keadilan dan kebajikan dalam masyarakat.</p>
              </div>
            </div>

            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Ujian & Kesabaran (Kisah Ummah)</h3>
            <div className="flex flex-col md:flex-row justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
              <div className="flex items-start gap-3 flex-1">
                <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Sabar dalam kesempitan</span>
              </div>
              <div className="flex items-start gap-3 flex-1">
                <Target className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Fokus pada matlamat akhirat</span>
              </div>
              <div className="flex items-start gap-3 flex-1">
                <HandHeart className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Zikir & Syukur sebagai kekuatan</span>
              </div>
            </div>
          </Card>

          <Card title="Cermin Sejarah & Model Kepimpinan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">3 Amaran dari Kisah Talut</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Jangan takut pada musuh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Jangan langgar perintah disiplin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <VenetianMask className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Jangan putus asa dengan jumlah sedikit</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Model Kepimpinan (Talut)</h3>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-teal-900 rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">Keluasan Ilmu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">Kekuatan Fizikal & Mental</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">Pilihan Allah (Bukan Keturunan)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-blue-500">
                "Katakanlah: Adakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui? Sesungguhnya orang yang berakallah yang dapat menerima pelajaran." (Az-Zumar: 9)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Juz 2 menekankan kepentingan ilmu dan ketaatan. Perubahan kiblat adalah ujian bagi mereka yang benar-benar mengikut Rasul.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Sesiapa yang berpuasa Ramadan dengan penuh keimanan dan mengharapkan keredhaan Allah, diampunkan dosanya yang lalu." (HR. Bukhari)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Kaitan dengan syariat puasa yang diturunkan dalam Juz ini, menekankan kualiti hati dalam melaksanakan ibadah.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Shield className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Menjaga kualiti puasa (Ramadan).</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Shield className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Mempelajari hukum-hakam keluarga (Nikah/Cerai).</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Shield className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Berdoa memohon keteguhan hati (Rabbana afrigh 'alaina sabran).</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="col-span-1 lg:col-span-12 mt-4">
          <SectionHeader title="Rumusan 3 Mesej Utama Juz 2" className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Identiti & Hala Tuju:</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Perubahan kiblat menegaskan identiti umat Islam yang bebas dan bersatu.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Scale className="w-8 h-8 text-slate-700 dark:text-slate-300 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Keseimbangan Hidup:</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Syariat Islam mengatur hubungan dengan Allah dan sesama manusia secara seimbang.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Swords className="w-8 h-8 text-amber-700 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Kemenangan Melalui Taqwa:</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kemenangan bukan pada jumlah, tetapi pada ketaatan, kesabaran, dan pertolongan Allah.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz3 = () => (
    <>
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 3</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Baqarah: 253 - Al-Imran: 91</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
            Ujian Keimanan & Keteguhan Tauhid.
          </p>
        </div>
        
        {/* Formula Keberkatan */}
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">
            Formula<br/>Keberkatan
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Coins className="w-6 h-6 text-amber-600" />
              <span className="text-xs font-medium">Infaq</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Heart className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Ikhlas</span>
            </div>
            <ArrowRight className="w-6 h-6 text-amber-600" />
            <div className="flex flex-col items-center gap-1">
              <Sparkles className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Berkat</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 3">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">3 Tema Besar Juz 3</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kekuasaan Allah (Ayat Kursi)</span>
              </li>
              <li className="flex items-start gap-3">
                <Coins className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Ekonomi Islam (Infaq vs Riba)</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium leading-snug">Dialog Ahli Kitab<br/><span className="text-xs text-slate-500 font-normal">(Keteguhan Akidah)</span></span>
              </li>
            </ul>
          </Card>

          <div>
            <SectionHeader title="Tauhid (Asas Kekuatan)" className="mb-4" />
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Rumusan Ayat Kursi</h3>
            <div className="flex justify-between items-start gap-2">
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <Shield className="w-8 h-8 text-amber-700" />
                <span className="text-xs font-medium leading-tight">Sifat Allah<br/>(Al-Hayyul Qayyum)</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <Globe className="w-8 h-8 text-teal-700" />
                <span className="text-xs font-medium leading-tight">Kekuasaan<br/>(Langit & Bumi)</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 flex-1">
                <Lightbulb className="w-8 h-8 text-amber-500" />
                <span className="text-xs font-medium leading-tight">Ilmu Allah<br/>(Meliputi Segalanya)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 space-y-10">
          <Card title="Profil Mukmin & Ekonomi">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">3 Bidang Utama Kehidupan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#1e7465] text-white rounded-xl p-4 relative shadow-sm">
                <div className="absolute -top-3 right-4 bg-white rounded-full p-1.5 shadow-sm">
                  <Coins className="w-4 h-4 text-[#1e7465]" />
                </div>
                <h4 className="font-bold text-center mb-2 border-b border-white/20 pb-2 leading-tight">
                  Infaq<br/><span className="text-xs font-normal text-teal-100">(Pembersihan Harta)</span>
                </h4>
                <p className="text-xs text-center text-teal-50">Menyuburkan harta dan menghapuskan dosa.</p>
              </div>
              <div className="bg-[#1e3a5f] text-white rounded-xl p-4 relative shadow-sm">
                <div className="absolute -top-3 right-4 bg-white rounded-full p-1.5 shadow-sm">
                  <AlertTriangle className="w-4 h-4 text-[#1e3a5f]" />
                </div>
                <h4 className="font-bold text-center mb-2 border-b border-white/20 pb-2 leading-tight">
                  Riba<br/><span className="text-xs font-normal text-blue-100">(Kerosakan Sosial)</span>
                </h4>
                <p className="text-xs text-center text-blue-50">Menghancurkan keberkatan dan menzalimi manusia.</p>
              </div>
              <div className="bg-[#4a6b8c] text-white rounded-xl p-4 relative shadow-sm">
                <div className="absolute -top-3 right-4 bg-white rounded-full p-1.5 shadow-sm">
                  <Star className="w-4 h-4 text-[#4a6b8c]" />
                </div>
                <h4 className="font-bold text-center mb-2 border-b border-white/20 pb-2 leading-tight">
                  Tauhid<br/><span className="text-xs font-normal text-slate-200">(Keteguhan Akidah)</span>
                </h4>
                <p className="text-xs text-center text-slate-100">Menjaga iman daripada syubhat Ahli Kitab.</p>
              </div>
            </div>

            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Kisah Kebangkitan & Keyakinan</h3>
            <div className="flex flex-col md:flex-row justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
              <div className="flex items-start gap-3 flex-1">
                <Compass className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Ibrahim & Burung (Yakin Hati)</span>
              </div>
              <div className="flex items-start gap-3 flex-1">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Uzair (Bukti Kebangkitan)</span>
              </div>
              <div className="flex items-start gap-3 flex-1">
                <Sparkles className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Maryam & Zakaria (Kurniaan Allah)</span>
              </div>
            </div>
          </Card>

          <Card title="Cermin Sejarah & Model Kesucian">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">3 Amaran dari Al-Imran</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Jangan berpecah-belah</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Jangan terpedaya hujah batil</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Jangan ambil pemimpin yang memusuhi Islam</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Model Kesucian (Keluarga Imran)</h3>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <User className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">Pengabdian Sejak Dalam Kandungan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">Menjaga Kesucian Diri</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HandHeart className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">Doa Yang Tidak Putus-putus</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Kamu sekali-kali tidak sampai kepada kebajikan (yang sempurna), sebelum kamu menafkahkan sebahagian harta yang kamu cintai." (Al-Imran: 92)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Juz 3 mengajar kita tentang hakikat pengorbanan. Infaq bukan sekadar memberi, tetapi memberi apa yang paling kita sayangi.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-xl italic text-sm text-amber-900 border-l-4 border-amber-500">
                "Sesiapa yang membaca Ayat Kursi setiap kali selepas solat fardu, tidak ada yang menghalangnya daripada masuk syurga melainkan kematian." (HR. An-Nasa'i)
              </div>
              <p className="mt-4 text-xs text-amber-700 leading-relaxed">
                Menekankan keagungan Ayat Kursi yang terdapat dalam Juz ini sebagai pelindung dan jalan ke syurga.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Coins className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Bersedekah dengan barang yang paling disukai.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Coins className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Membaca dan memahami maksud Ayat Kursi.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Coins className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Menjauhi segala bentuk transaksi yang syubhat/riba.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="col-span-1 lg:col-span-12 mt-4">
          <SectionHeader title="Rumusan 3 Mesej Utama Juz 3" className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Keagungan Allah:</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Mengenal sifat Allah melalui Ayat Kursi sebagai benteng akidah.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Coins className="w-8 h-8 text-slate-700 dark:text-slate-300 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Keadilan Ekonomi:</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Membina masyarakat melalui Infaq dan menjauhi Riba yang menzalimi.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-amber-700 shrink-0" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">Keteguhan Akidah:</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Menjaga iman di tengah cabaran pemikiran dan dialog dengan Ahli Kitab.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz4 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 4</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Imran: 92 - An-Nisa: 23</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Pengorbanan, Ujian Uhud & Keadilan Sosial.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Formula<br/>Kebaikan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Heart className="w-6 h-6 text-rose-600" />
              <span className="text-xs font-medium">Cinta</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <HandHeart className="w-6 h-6 text-amber-600" />
              <span className="text-xs font-medium">Infaq</span>
            </div>
            <ArrowRight className="w-6 h-6 text-rose-600" />
            <div className="flex flex-col items-center gap-1">
              <Gem className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Al-Birr</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 4">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Mesej Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Erti Kebajikan (Lan tanalul birra)</span>
              </li>
              <li className="flex items-start gap-3">
                <Swords className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Ibrah Perang Uhud (Kepatuhan)</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Hak Anak Yatim & Wanita</span>
              </li>
            </ul>
          </Card>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <h3 className="font-bold text-rose-900 mb-2 flex items-center gap-2">
              <Flame className="w-5 h-5" /> Amaran Riba
            </h3>
            <p className="text-sm text-rose-800 leading-relaxed">
              Ditegaskan kembali di tengah kisah peperangan, menunjukkan ekonomi yang bersih adalah tunjang kekuatan tentera dan ummah.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Ibrah Uhud: Antara Kemenangan & Ujian">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Punca Kekalahan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Ketidakpatuhan kepada arahan Rasulullah SAW dan tarikan kepada harta rampasan perang (Ghanimah).</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Hikmah Ujian</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Membersihkan saf mukmin daripada golongan munafik dan mengangkat darjat para syuhada.</p>
              </div>
            </div>
          </Card>

          <Card title="Keadilan Sosial (Permulaan An-Nisa)">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-teal-700" />
                  <h4 className="font-bold text-sm">Hak Anak Yatim</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Larangan memakan harta mereka secara zalim. Menjaga amanah adalah kunci keharmonian.</p>
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <VenetianMask className="w-5 h-5 text-rose-700" />
                  <h4 className="font-bold text-sm">Hak Wanita</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Pemberian mahar dengan ikhlas dan penghormatan terhadap kedudukan wanita dalam keluarga.</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-rose-500">
                "Dan berpeganglah kamu semuanya kepada tali (agama) Allah, dan janganlah kamu bercerai berai." (Al-Imran: 103)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Juz 4 menekankan kepentingan perpaduan. Kekalahan di Uhud adalah pengajaran tentang bahaya perpecahan dan ketidakpatuhan.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Uhud adalah gunung yang mencintai kami dan kami mencintainya." (HR. Bukhari)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Mengingatkan kita tentang peristiwa Uhud dalam Juz ini, di mana cinta dan ketaatan diuji dalam perjuangan.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Heart className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Mengeratkan silaturrahim dan mengelakkan perbalahan.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Heart className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Mempelajari sejarah Perang Uhud dan ibrahnya.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Heart className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Menyantuni anak yatim di kawasan sekitar.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz5 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 5</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">An-Nisa: 24 - An-Nisa: 147</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Keadilan Keluarga, Hak Wanita & Pengurusan Konflik.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Keadilan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <ScaleIcon className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Adil</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-xs font-medium">Rahmah</span>
            </div>
            <ArrowRight className="w-6 h-6 text-teal-600" />
            <div className="flex flex-col items-center gap-1">
              <Home className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Sakinah</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 5">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Fokus Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Gavel className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Hukum Kekeluargaan (Nikah/Cerai)</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Keadilan dalam Kehakiman</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Bahaya Nifaq (Munafik)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50">
            <h3 className="font-bold text-blue-900 mb-2">Kepimpinan Lelaki</h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              Lelaki sebagai 'Qawwam' (pelindung & penyedia) bukan untuk menindas, tetapi untuk memikul tanggungjawab dengan penuh keadilan.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Keadilan dalam Rumahtangga">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-3">Penyelesaian Konflik</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Langkah-langkah menangani 'Nushuz' (penderhakaan) dengan hikmah, bukan keganasan.</p>
                <div className="bg-slate-50 p-3 rounded-lg text-[10px] font-mono text-slate-500">
                  Nasihat → Asingkan Tempat Tidur → Pukulan Ringan (Simbolik) → Perdamaian (Hakam)
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-3">Keadilan Mutlak</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Perintah menegakkan keadilan walaupun terhadap diri sendiri, ibu bapa, atau kaum kerabat. Keadilan tidak mengenal darjat kekayaan atau kemiskinan.</p>
              </div>
            </div>
          </Card>

          <Card title="Ciri-ciri Golongan Munafik">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-xl text-center">
                <VenetianMask className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                <span className="text-xs font-bold block mb-1">Dua Muka</span>
                <p className="text-[10px] text-slate-500">Beriman di depan, kufur di belakang.</p>
              </div>
              <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-xl text-center">
                <Zap className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <span className="text-xs font-bold block mb-1">Malas Ibadah</span>
                <p className="text-[10px] text-slate-500">Solat hanya untuk menunjuk-nunjuk (Riya').</p>
              </div>
              <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-xl text-center">
                <Anchor className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <span className="text-xs font-bold block mb-1">Ragu-ragu</span>
                <p className="text-[10px] text-slate-500">Tidak tetap pendirian, hanyut antara dua pihak.</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-teal-500">
                "Wahai orang-orang yang beriman, jadilah kamu orang yang benar-benar penegak keadilan, menjadi saksi kerana Allah biarpun terhadap dirimu sendiri." (An-Nisa: 135)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Juz 5 menekankan keadilan mutlak. Keadilan tidak boleh dipengaruhi oleh perasaan peribadi atau kepentingan kaum kerabat.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Sesiapa melepaskan satu kesusahan mukmin di dunia, Allah akan melepaskan kesusahannya di hari kiamat." (HR. Muslim)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Sesuai dengan tema An-Nisa yang banyak menyentuh tentang bantuan kepada anak yatim dan golongan lemah.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <ScaleIcon className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Berlaku adil dalam setiap keputusan kecil di rumah/pejabat.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <ScaleIcon className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Menjaga adab dan hak isteri/wanita dalam keluarga.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <ScaleIcon className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Menjauhi sifat riya' (menunjuk-nunjuk) dalam beribadah.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz6 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 6</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">An-Nisa: 148 - Al-Ma'idah: 81</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Keadilan, Perjanjian & Kesucian Makanan.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Integriti</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Layers className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Janji</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-amber-600" />
              <span className="text-xs font-medium">Amanah</span>
            </div>
            <ArrowRight className="w-6 h-6 text-teal-600" />
            <div className="flex flex-col items-center gap-1">
              <Star className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Taqwa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 6">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ScrollText className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Menepati Janji (Al-Ma'idah)</span>
              </li>
              <li className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Halal & Haram (Makanan)</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Hubungan dengan Ahli Kitab</span>
              </li>
            </ul>
          </Card>
          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-2xl border border-teal-100 dark:border-teal-800/50">
            <h3 className="font-bold text-teal-900 mb-2">Kesempurnaan Agama</h3>
            <p className="text-sm text-teal-800 leading-relaxed">
              Ayat "Al-yauma akmaltu lakum dinakum" (Hari ini Aku sempurnakan bagimu agamamu) menegaskan Islam sebagai cara hidup yang lengkap.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Integriti & Keadilan Mutlak">
            <div className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
              <Gavel className="w-10 h-10 text-slate-700 dark:text-slate-300 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Keadilan Tanpa Dendam</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  "Janganlah kebencianmu terhadap suatu kaum mendorong kamu untuk tidak berlaku adil." (Al-Ma'idah: 8). Ini adalah standard moral tertinggi dalam Islam.
                </p>
              </div>
            </div>
          </Card>

          <Card title="Syariat & Kesucian">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
                <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <Coffee className="w-4 h-4" /> Makanan Halal
                </h4>
                <p className="text-xs text-amber-800">Menjaga perut daripada yang haram adalah asas kepada doa yang makbul dan hati yang bersih.</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Wuduk & Tayammum
                </h4>
                <p className="text-xs text-blue-800">Pensyariatan bersuci menunjukkan Islam mementingkan kebersihan zahir dan batin sebelum menghadap Allah.</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-blue-500">
                "Wahai orang-orang yang beriman, janganlah kamu mengambil orang-orang Yahudi dan Nasrani menjadi pemimpin-pemimpin(mu); sebahagian mereka adalah pemimpin bagi sebahagian yang lain." (Al-Ma'idah: 51)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ayat ini mengajar kita tentang wala' (kesetiaan) and kepentingan membina kekuatan dalaman umat Islam sendiri.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Sesiapa mempermudahkan urusan orang lain, Allah akan mempermudahkan urusannya di dunia dan akhirat." (HR. Muslim)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Menekankan akhlak mulia dalam bermuamalah, selari dengan syariat yang diturunkan dalam Surah Al-Ma'idah.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <ScrollText className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Mempelajari sirah Nabi Isa A.S yang sebenar.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <ScrollText className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Menjaga batas pergaulan dengan bukan Islam tanpa menzalimi.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <ScrollText className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Memperkukuh akidah Tauhid daripada syirik.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz7 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 7</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Ma'idah: 82 - Al-An'am: 110</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Tauhid, Kebenaran Wahyu & Adab Berhujah.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Keyakinan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Lightbulb className="w-6 h-6 text-amber-500" />
              <span className="text-xs font-medium">Ilmu</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Iman</span>
            </div>
            <ArrowRight className="w-6 h-6 text-amber-600" />
            <div className="flex flex-col items-center gap-1">
              <Sparkles className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Nur</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 7">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Mesej Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Hubungan dengan Nasrani (Kelembutan Hati)</span>
              </li>
              <li className="flex items-start gap-3">
                <Gavel className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Sumpah & Larangan Memburu (Ihram)</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Tauhid dalam Penciptaan (Al-An'am)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-amber-50 border border-amber-100 dark:border-amber-800/50 dark:border-amber-800/50">
            <h3 className="font-bold text-amber-900 mb-2">Adab Berhujah</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Al-An'am mengajar kita berdialog dengan logik dan bukti alam semulajadi untuk mematahkan hujah syirik.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Kebenaran Wahyu & Alam">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tanda-tanda Kekuasaan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Dari benih yang tumbuh hingga peredaran bintang, semuanya adalah ayat-ayat Allah yang nyata bagi mereka yang berfikir.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tanggungjawab Diri</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Setiap jiwa bertanggungjawab atas amalannya sendiri. Tidak ada yang memikul dosa orang lain.</p>
              </div>
            </div>
          </Card>

          <Card title="Dialog Ibrahim & Kaumnya">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Compass className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Mencari Tuhan</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Kisah Nabi Ibrahim menggunakan bintang, bulan, dan matahari untuk membuktikan bahawa Tuhan tidak akan tenggelam atau hilang. Tauhid adalah fitrah.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-emerald-500">
                "Pada hari ini telah Kusempurnakan untuk kamu agamamu, dan telah Ku-cukupkan kepadamu nikmat-Ku, dan telah Ku-redhai Islam itu jadi agama bagimu." (Al-Ma'idah: 3)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Islam adalah agama yang lengkap. Tidak perlu mencari sistem lain kerana Allah telah menjamin kesempurnaan syariat-Nya.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Sesiapa membaca dua ayat terakhir Surah Al-Baqarah pada malam hari, cukuplah baginya." (HR. Bukhari & Muslim)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Menekankan kecukupan dengan wahyu Allah, selari dengan tema Al-Ma'idah yang menceritakan kesempurnaan nikmat agama.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Globe className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-xs font-medium">Memastikan makanan yang dimakan adalah Halalan Tayyiban.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Globe className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-xs font-medium">Menjauhi segala bentuk sumpah palsu.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Globe className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-xs font-medium">Melihat alam sekitar sebagai tanda kebesaran Allah.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz8 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 8</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-An'am: 111 - Al-A'raf: 87</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Penciptaan, Sejarah Para Nabi & Amaran Syaitan.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Kesedaran</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <VenetianMask className="w-6 h-6 text-rose-600" />
              <span className="text-xs font-medium">Waspada</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Taqwa</span>
            </div>
            <ArrowRight className="w-6 h-6 text-rose-600" />
            <div className="flex flex-col items-center gap-1">
              <Home className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Syurga</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 8">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Fokus Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Flame className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Permusuhan Iblis (Kisah Adam)</span>
              </li>
              <li className="flex items-start gap-3">
                <ScrollText className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kisah Nabi Nuh, Hud, Salih, Lut</span>
              </li>
              <li className="flex items-start gap-3">
                <Building className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Adab Berpakaian & Berhias</span>
              </li>
            </ul>
          </Card>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <h3 className="font-bold text-rose-900 mb-2">Pakaian Taqwa</h3>
            <p className="text-sm text-rose-800 leading-relaxed">
              "Libasut-taqwa dhalika khair." Pakaian taqwa adalah yang terbaik, lebih utama daripada perhiasan zahir.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Amaran dari Sejarah">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border-l-4 border-amber-500 bg-slate-50 rounded-r-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kaum Nuh & Hud</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Kehancuran akibat kesombongan dan menolak kebenaran yang dibawa para rasul.</p>
              </div>
              <div className="p-4 border-l-4 border-rose-500 bg-slate-50 rounded-r-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kaum Salih & Lut</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">Peringatan tentang kerosakan moral dan pengingkaran terhadap nikmat Allah.</p>
              </div>
            </div>
          </Card>

          <Card title="Tipu Daya Iblis">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 bg-rose-900 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <VenetianMask className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Sumpah Iblis</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Iblis bersumpah akan menyesatkan manusia dari depan, belakang, kanan, dan kiri. Hanya hamba yang bersyukur dan bertaqwa akan selamat.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Katakanlah: Sesungguhnya solatku, ibadahku, hidupku dan matiku hanyalah untuk Allah, Tuhan semesta alam." (Al-An'am: 162)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Inilah ikrar tauhid yang paling agung. Menjadikan seluruh aspek kehidupan sebagai ibadah kepada Allah.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-slate-100 p-4 rounded-xl italic text-sm text-slate-900 dark:text-white border-l-4 border-slate-500">
                "Sesungguhnya Allah tidak melihat kepada rupa paras dan harta kamu, tetapi Allah melihat kepada hati dan amalan kamu." (HR. Muslim)
              </div>
              <p className="mt-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Selari dengan tema 'Pakaian Taqwa' dalam Juz ini, di mana kualiti dalaman lebih utama daripada luaran.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <User className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Mengikhlaskan niat dalam setiap pekerjaan.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <User className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Berwaspada dengan tipu daya syaitan (was-was).</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <User className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Menjaga adab berpakaian (Zinatu-kum) ketika ke masjid.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz9 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 9</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-A'raf: 88 - Al-Anfal: 40</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Kemenangan, Kehancuran Zalim & Ibrah Perang Badar.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Kemenangan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Swords className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              <span className="text-xs font-medium">Jihad</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Users className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Sabar</span>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            <div className="flex flex-col items-center gap-1">
              <Target className="w-6 h-6 text-amber-600" />
              <span className="text-xs font-medium">Nasr</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 9">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ScrollText className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kisah Nabi Syuaib & Musa</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Perjuangan Melawan Firaun</span>
              </li>
              <li className="flex items-start gap-3">
                <Swords className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Hukum Perang & Ghanimah (Al-Anfal)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-400" /> Kemenangan Badar
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Kemenangan bukan kerana bilangan, tetapi kerana pertolongan Allah (Nasrullah) dan keteguhan iman.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Musa & Firaun: Pertembungan Haq & Batil">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-4 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kekuatan Mukjizat</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Tongkat Musa menelan kepalsuan ahli sihir Firaun. Kebenaran pasti akan menghapuskan kebatilan.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Keteguhan Tukang Sihir</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Setelah melihat kebenaran, mereka sanggup mati syahid demi mempertahankan iman mereka kepada Tuhan Musa & Harun.</p>
              </div>
            </div>
          </Card>

          <Card title="Prinsip Al-Anfal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-xl text-center bg-teal-50 dark:bg-teal-900/30/30">
                <Users className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <span className="text-xs font-bold block mb-1">Persaudaraan</span>
                <p className="text-[10px] text-slate-500">Menjaga hubungan sesama mukmin.</p>
              </div>
              <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-xl text-center bg-amber-50 dark:bg-amber-900/30/30">
                <Shield className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <span className="text-xs font-bold block mb-1">Ketaatan</span>
                <p className="text-[10px] text-slate-500">Taat kepada Allah & Rasul.</p>
              </div>
              <div className="p-4 border border-slate-100 dark:border-slate-700 rounded-xl text-center bg-slate-50">
                <Zap className="w-6 h-6 text-slate-600 dark:text-slate-400 mx-auto mb-2" />
                <span className="text-xs font-bold block mb-1">Keteguhan</span>
                <p className="text-[10px] text-slate-500">Sabar dalam menghadapi musuh.</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-slate-500">
                "Sesungguhnya orang-orang yang beriman ialah mereka yang bila disebut nama Allah gemetarlah hati mereka, dan apabila dibacakan ayat-ayat-Nya bertambahlah iman mereka." (Al-Anfal: 2)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Iman yang hidup adalah iman yang merasai kehadiran Allah dan terkesan dengan kalam-Nya.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl italic text-sm text-blue-900 border-l-4 border-blue-500">
                "Ketahuilah bahawa kemenangan itu bersama kesabaran, dan kelapangan itu bersama kesempitan." (HR. Ahmad)
              </div>
              <p className="mt-4 text-xs text-blue-700 leading-relaxed">
                Mengambil ibrah dari kemenangan Perang Badar dan kesabaran Nabi Musa menghadapi Firaun.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Swords className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                  </div>
                  <span className="text-xs font-medium">Membaca kisah perjuangan Nabi Musa A.S menentang Firaun.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Swords className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                  </div>
                  <span className="text-xs font-medium">Memperbanyakkan zikir agar hati sentiasa tenang.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Swords className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                  </div>
                  <span className="text-xs font-medium">Belajar untuk bertawakkal sepenuhnya setelah berusaha.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz10 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 10</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Anfal: 41 - At-Tawbah: 92</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Jihad, Pembersihan Saf & Hakikat Taubat.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Penyucian</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <VenetianMask className="w-6 h-6 text-rose-600" />
              <span className="text-xs font-medium">Nifaq</span>
            </div>
            <span className="text-lg font-bold text-slate-400">→</span>
            <div className="flex flex-col items-center gap-1">
              <ScrollText className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Taubat</span>
            </div>
            <ArrowRight className="w-6 h-6 text-teal-600" />
            <div className="flex flex-col items-center gap-1">
              <Heart className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Ikhlas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 10">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Coins className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Pembahagian Ghanimah (1/5)</span>
              </li>
              <li className="flex items-start gap-3">
                <VenetianMask className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Mendedahkan Sifat Munafik</span>
              </li>
              <li className="flex items-start gap-3">
                <Building className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Pembebasan Masjidil Haram</span>
              </li>
            </ul>
          </Card>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <h3 className="font-bold text-rose-900 mb-2">Amaran Munafik</h3>
            <p className="text-sm text-rose-800 leading-relaxed">
              At-Tawbah mendedahkan alasan-alasan palsu golongan munafik untuk tidak menyertai jihad (Perang Tabuk).
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Pembersihan Saf Perjuangan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-4 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Zakat & Sedekah</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Zakat sebagai pembersih harta dan jiwa. Hanya mereka yang bertaqwa akan menunaikannya dengan senang hati.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Masjid Dirar</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Amaran tentang membina institusi (masjid) untuk memecahbelahkan umat dan menjadi sarang musuh.</p>
              </div>
            </div>
          </Card>

          <Card title="Hakikat Taubat">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <ScrollText className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Pintu Taubat Sentiasa Terbuka</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Kisah tiga orang mukmin yang jujur mengakui kesilapan mereka tidak menyertai perang, akhirnya diterima taubat mereka setelah diuji dengan pemulauan.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-rose-500">
                "Jika mereka bertaubat, mendirikan solat dan menunaikan zakat, maka mereka itu adalah saudara-saudaramu seagama." (At-Taubah: 11)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Persaudaraan Islam dibina atas asas ketaatan kepada Allah. Taubat adalah jalan untuk kembali ke pangkuan rahmat-Nya.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-xl italic text-sm text-teal-900 border-l-4 border-teal-500">
                "Orang yang bertaubat dari dosa seperti orang yang tidak mempunyai dosa." (HR. Ibn Majah)
              </div>
              <p className="mt-4 text-xs text-teal-700 leading-relaxed">
                Sesuai dengan tema Surah At-Tawbah yang menekankan pintu keampunan Allah bagi mereka yang jujur.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <HandHeart className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Melaksanakan solat Taubat secara berkala.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <HandHeart className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Memastikan zakat harta dan fitrah dibayar tepat pada waktunya.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <HandHeart className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Menjauhi sifat nifaq (munafik) dalam beramal.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz11 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 11</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">At-Tawbah: 93 - Hud: 5</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Keikhlasan, Dakwah & Keteguhan Rasul.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Dakwah</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Users className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Umat</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Compass className="w-6 h-6 text-amber-600" />
              <span className="text-xs font-medium">Hidayah</span>
            </div>
            <ArrowRight className="w-6 h-6 text-teal-600" />
            <div className="flex flex-col items-center gap-1">
              <Star className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Falah</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 11">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Fokus Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ScrollText className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kisah Nabi Yunus (Penyelamatan)</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kekuasaan Allah di Alam Maya</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Sifat-sifat Orang Bertaqwa</span>
              </li>
            </ul>
          </Card>
          <div className="bg-teal-900 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" /> Surah Yunus
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Menekankan bahawa hidayah adalah milik Allah, dan tugas Rasul hanyalah menyampaikan dengan penuh kesabaran.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Keajaiban Penciptaan & Wahyu">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Al-Quran: Penawar Hati</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">"Wahai manusia, sesungguhnya telah datang kepadamu pelajaran dari Tuhanmu dan penyembuh bagi penyakit-penyakit dalam dada."</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Keadilan Allah</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Allah tidak menzalimi manusia sedikitpun, tetapi manusialah yang menzalimi diri mereka sendiri dengan berpaling dari kebenaran.</p>
              </div>
            </div>
          </Card>

          <Card title="Keteguhan dalam Dakwah">
            <div className="flex items-start gap-4 bg-amber-50 dark:bg-amber-900/30 p-6 rounded-xl border border-amber-100 dark:border-amber-800/50">
              <Zap className="w-10 h-10 text-amber-700 shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 mb-2">Cabaran Para Nabi</h4>
                <p className="text-sm text-amber-600 leading-relaxed">
                  Permulaan Surah Hud yang mengingatkan tentang beratnya tugas dakwah dan perlunya bergantung sepenuhnya kepada kekuatan Allah (Tawakkal).
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-teal-500">
                "Wahai manusia, sesungguhnya telah datang kepadamu pelajaran dari Tuhanmu dan penyembuh bagi penyakit-penyakit (yang berada) dalam dada." (Yunus: 57)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Al-Quran bukan sekadar bacaan, tetapi penawar bagi hati yang gelisah dan ubat bagi penyakit rohani.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-xl italic text-sm text-teal-900 border-l-4 border-teal-500">
                "Sampaikanlah dariku walaupun satu ayat." (HR. Bukhari)
              </div>
              <p className="mt-4 text-xs text-teal-700 leading-relaxed">
                Menggalakkan semangat dakwah yang menjadi tema utama dalam Surah Yunus dan Hud.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Shield className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Membaca Al-Quran dengan niat mencari kesembuhan hati.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Shield className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Berusaha untuk istiqamah dalam amalan sunat yang kecil.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Shield className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Mendoakan kebaikan untuk umat Islam yang dizalimi.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz12 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 12</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Hud: 6 - Yusuf: 52</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Kesabaran, Ujian Hidup & Keindahan Akhlak.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Ketabahan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-xs font-medium">Sabar</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Ihsan</span>
            </div>
            <ArrowRight className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col items-center gap-1">
              <Star className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Izzah</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 12">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ScrollText className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kisah Nabi Hud, Salih, Ibrahim, Lut, Syuaib</span>
              </li>
              <li className="flex items-start gap-3">
                <User className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kisah Nabi Yusuf (Ahsanul Qasas)</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Rezeki Allah untuk Semua Makhluk</span>
              </li>
            </ul>
          </Card>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50">
            <h3 className="font-bold text-blue-900 mb-2">Ahsanul Qasas</h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              Kisah Nabi Yusuf disebut sebagai "Kisah Terbaik" kerana ia mengandungi spektrum emosi manusia: cinta, cemburu, pengkhianatan, kesabaran, dan kemaafan.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Ibrah dari Surah Hud">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Istighfar: Kunci Rezeki</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Memohon ampun kepada Allah bukan sahaja menghapuskan dosa, tetapi juga membuka pintu keberkatan dan kekuatan di dunia.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Keadilan dalam Timbangan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kisah Nabi Syuaib menekankan integriti dalam perniagaan. Penipuan dalam timbangan adalah punca kehancuran tamadun.</p>
              </div>
            </div>
          </Card>

          <Card title="Yusuf: Dari Telaga ke Istana">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Star className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Ujian Keindahan & Kedudukan</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Bagaimana Nabi Yusuf menghadapi godaan Zulaikha dengan kekuatan 'Burhan' (bukti/petunjuk) dari Allah. Kesucian diri lebih berharga daripada kebebasan fizikal.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Dan aku tidak membebaskan diriku (dari kesalahan), kerana sesungguhnya nafsu itu selalu menyuruh kepada kejahatan, kecuali nafsu yang diberi rahmat oleh Tuhanku." (Yusuf: 53)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Pengakuan Nabi Yusuf tentang kelemahan manusia di hadapan nafsu. Hanya rahmat Allah yang dapat menyelamatkan kita.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-xl italic text-sm text-amber-900 border-l-4 border-amber-500">
                "Sesiapa yang menjaga kehormatan dirinya, Allah akan menjaganya." (HR. Bukhari)
              </div>
              <p className="mt-4 text-xs text-amber-700 leading-relaxed">
                Mengambil ibrah dari kisah Nabi Yusuf yang menjaga kesucian diri walaupun dalam ujian yang berat.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Star className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Mempelajari adab-adab dalam menghadapi ujian fitnah.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Star className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Memaafkan kesalahan orang lain sebagaimana Yusuf memaafkan saudaranya.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Star className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Sentiasa bersangka baik dengan takdir Allah.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz13 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 13</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Yusuf: 53 - Ibrahim: 52</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Kemenangan Sabar, Gema Tauhid & Kebenaran Wahyu.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Keyakinan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <CloudRain className="w-6 h-6 text-blue-600" />
              <span className="text-xs font-medium">Rahmat</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Sun className="w-6 h-6 text-amber-500" />
              <span className="text-xs font-medium">Cahaya</span>
            </div>
            <ArrowRight className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Aman</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 13">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <User className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kesudahan Kisah Yusuf (Kemaafan)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Guruh Bertasbih (Ar-Ra'd)</span>
              </li>
              <li className="flex items-start gap-3">
                <Building className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Doa Nabi Ibrahim (Keamanan Makkah)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-amber-50 border border-amber-100 dark:border-amber-800/50 dark:border-amber-800/50">
            <h3 className="font-bold text-amber-900 mb-2">Ketenangan Hati</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              "Ala bi dhikrillahi tatma'innul qulub" (Hanya dengan mengingati Allah hati akan menjadi tenang). Kunci kebahagiaan hakiki.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Ar-Ra'd: Kebenaran yang Menggetarkan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Sunnatullah Perubahan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Allah tidak akan mengubah nasib sesuatu kaum sehingga mereka mengubah apa yang ada pada diri mereka sendiri.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Perumpamaan Haq & Batil</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kebenaran seperti air yang memberi manfaat, manakala kebatilan seperti buih yang akan hilang sia-sia.</p>
              </div>
            </div>
          </Card>

          <Card title="Ibrahim: Cahaya di Tengah Kegelapan">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Sun className="w-10 h-10 text-amber-600 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Kalimah Thayyibah</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Perumpamaan kalimah tauhid seperti pohon yang baik: akarnya teguh di bumi, cabangnya menjulang ke langit, memberi buah setiap masa.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-blue-500">
                "Hanya dengan mengingati Allah hati akan menjadi tenang." (Ar-Ra'd: 28)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ketenangan bukan datang dari harta atau kedudukan, tetapi dari hubungan yang rapat dengan Pencipta melalui zikir dan syukur.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-slate-100 p-4 rounded-xl italic text-sm text-slate-900 dark:text-white border-l-4 border-slate-500">
                "Ketahuilah, sesungguhnya di dalam tubuh manusia itu ada seketul daging. Jika ia baik, maka baiklah seluruh tubuhnya." (HR. Bukhari)
              </div>
              <p className="mt-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Menekankan kepentingan hati yang tenang (Mutmainnah) yang menjadi fokus dalam Surah Ar-Ra'd.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <CloudRain className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Melazimi zikir pagi dan petang.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <CloudRain className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Berusaha mengubah diri ke arah yang lebih baik setiap hari.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <CloudRain className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Mendoakan keamanan untuk negara dan umat Islam.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz14 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 14</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Hijr: 1 - An-Nahl: 128</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Penjagaan Wahyu, Nikmat Allah & Syukur.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Kesyukuran</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Coffee className="w-6 h-6 text-amber-700" />
              <span className="text-xs font-medium">Nikmat</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Heart className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Syukur</span>
            </div>
            <ArrowRight className="w-6 h-6 text-amber-700" />
            <div className="flex flex-col items-center gap-1">
              <Sparkles className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Ziyadah</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 14">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Jaminan Penjagaan Al-Quran</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kisah Kaum Luth & Syuaib</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Hamparan Nikmat Allah (An-Nahl)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-2xl border border-teal-100 dark:border-teal-800/50">
            <h3 className="font-bold text-teal-900 mb-2">Surah Lebah (An-Nahl)</h3>
            <p className="text-sm text-teal-800 leading-relaxed">
              Dinamakan An-Nahl kerana keajaiban lebah yang menghasilkan madu sebagai penawar, simbol kepada masyarakat yang produktif dan harmoni.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Nikmat yang Tidak Terhitung">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Zahir & Batin</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Dari hujan yang menumbuhkan tanaman hingga haiwan ternakan yang memberi manfaat, semuanya adalah tanda kasih sayang Allah.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Keadilan & Ihsan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Allah memerintah berlaku adil, berbuat ihsan, and memberi bantuan kepada kaum kerabat.</p>
              </div>
            </div>
          </Card>

          <Card title="Penjagaan Al-Quran">
            <div className="flex items-start gap-4 bg-slate-900 text-white p-6 rounded-xl shadow-xl">
              <Shield className="w-10 h-10 text-teal-400 shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Janji Allah</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  "Inna nahnu nazzalnadz-dhikra wa inna lahu lahafidhun" (Sesungguhnya Kamilah yang menurunkan Al-Quran, dan Kamilah yang memeliharanya).
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Dan jika kamu menghitung nikmat Allah, nescaya kamu tidak akan mampu menghitungnya." (An-Nahl: 18)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Kesedaran akan nikmat yang melimpah ruah seharusnya melahirkan rasa syukur yang mendalam dan ketaatan yang tidak berbelah bagi.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-rose-50 p-4 rounded-xl italic text-sm text-rose-900 border-l-4 border-rose-500">
                "Keredhaan Allah terletak pada keredhaan ibu bapa, dan kemurkaan Allah terletak pada kemurkaan ibu bapa." (HR. Tirmidzi)
              </div>
              <p className="mt-4 text-xs text-rose-700 leading-relaxed">
                Hadis ini memperkukuhkan perintah Al-Quran dalam Juz ini tentang kewajipan berbakti kepada orang tua.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Coffee className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Menulis 3 nikmat yang disyukuri setiap hari.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Coffee className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Mengamalkan adab-adab makan dan minum sebagai tanda syukur.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Coffee className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Membantu orang lain yang sedang dalam kesempitan.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz15 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 15</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Isra: 1 - Al-Kahf: 74</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Perjalanan Rohani, Adab & Ujian Fitnah Dunia.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Perlindungan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Moon className="w-6 h-6 text-indigo-600" />
              <span className="text-xs font-medium">Malam</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Eye className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Basirah</span>
            </div>
            <ArrowRight className="w-6 h-6 text-indigo-600" />
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Kahf</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 15">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Isra' Mi'raj (Kekuasaan Allah)</span>
              </li>
              <li className="flex items-start gap-3">
                <HandHeart className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Adab kepada Ibu Bapa</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Fitnah Iman (Ashabul Kahfi)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
            <h3 className="font-bold text-indigo-900 mb-2">Surah Al-Kahf</h3>
            <p className="text-sm text-indigo-800 leading-relaxed">
              Benteng daripada fitnah akhir zaman. Membaca 10 ayat awal dan akhir adalah pelindung daripada fitnah Dajjal.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Adab & Akhlak Mukmin">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Berbuat Baik kepada Ibu Bapa</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Jangan berkata "Ah" dan rendahkanlah sayap kehinaan kerana belas kasihan kepada mereka.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Larangan Membazir</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Orang yang membazir adalah saudara syaitan. Gunakan nikmat pada jalan yang diredhai.</p>
              </div>
            </div>
          </Card>

          <Card title="Ujian Fitnah: Iman & Harta">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-teal-50 dark:bg-teal-900/30 p-4 rounded-xl">
                <Shield className="w-8 h-8 text-teal-700 shrink-0" />
                <div>
                  <h4 className="font-bold text-teal-900 mb-1 text-sm">Fitnah Iman</h4>
                  <p className="text-[10px] text-teal-600">Kisah pemuda gua yang menyelamatkan iman dari pemerintah yang zalim.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-amber-50 dark:bg-amber-900/30 p-4 rounded-xl">
                <Coins className="w-8 h-8 text-amber-700 shrink-0" />
                <div>
                  <h4 className="font-bold text-amber-900 mb-1 text-sm">Fitnah Harta</h4>
                  <p className="text-[10px] text-amber-600">Kisah pemilik dua kebun yang sombong dengan kekayaannya sehingga lupa kepada Allah.</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-indigo-500">
                "Harta dan anak-anak adalah perhiasan kehidupan dunia, tetapi amalan-amalan yang kekal lagi soleh adalah lebih baik pahalanya di sisi Tuhanmu." (Al-Kahf: 46)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Jangan terpedaya dengan keindahan dunia yang sementara. Fokuslah kepada bekalan akhirat yang abadi.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-xl italic text-sm text-teal-900 border-l-4 border-teal-500">
                "Sesiapa yang membaca sepuluh ayat terakhir dari Surah Al-Kahfi, dia akan terpelihara dari fitnah Dajjal." (HR. Muslim)
              </div>
              <p className="mt-4 text-xs text-teal-700 leading-relaxed">
                Kelebihan Surah Al-Kahfi sebagai pelindung dari fitnah akhir zaman, selari dengan kisah-kisah dalam Juz ini.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Moon className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium">Membaca Surah Al-Kahf setiap hari Jumaat.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Moon className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium">Menghafal 10 ayat pertama dan 10 ayat terakhir Surah Al-Kahf.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Moon className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium">Mendoakan kesejahteraan ibu bapa setiap kali selepas solat.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz16 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 16</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Kahf: 75 - Ta-Ha: 135</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Keajaiban Ilmu, Kekuatan Doa & Kemenangan Haq.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Harapan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Wind className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Lembut</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-6 h-6 text-amber-500" />
              <span className="text-xs font-medium">Tegas</span>
            </div>
            <ArrowRight className="w-6 h-6 text-teal-600" />
            <div className="flex flex-col items-center gap-1">
              <Star className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Nur</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 16">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Waves className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Musa & Khidir (Ujian Ilmu)</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kisah Maryam (Kekuatan Doa)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Musa & Firaun (Gema Ta-Ha)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-2xl border border-teal-100 dark:border-teal-800/50">
            <h3 className="font-bold text-teal-900 mb-2">Sifat Lemah Lembut</h3>
            <p className="text-sm text-teal-800 leading-relaxed">
              Allah memerintah Musa & Harun bercakap dengan "Qawlan Layyina" (kata-kata lemah lembut) kepada Firaun. Dakwah bermula dengan adab.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Maryam: Model Kesucian & Doa">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kurniaan Luar Biasa</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kelahiran Nabi Isa tanpa bapa sebagai bukti kekuasaan Allah yang mutlak. Tidak ada yang mustahil bagi-Nya.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Doa Nabi Zakaria</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Harapan yang tidak pernah putus walaupun usia sudah lanjut. Allah Maha Mendengar rintihan hamba-Nya.</p>
              </div>
            </div>
          </Card>

          <Card title="Ta-Ha: Penyejuk Hati Rasul">
            <div className="flex items-start gap-4 bg-amber-50 dark:bg-amber-900/30 p-6 rounded-xl border border-amber-100 dark:border-amber-800/50">
              <Zap className="w-10 h-10 text-amber-700 shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 mb-2">Al-Quran Bukan Bebanan</h4>
                <p className="text-sm text-amber-600 leading-relaxed">
                  "Ma anzalna 'alaikal qur'ana litashqa" (Kami tidak menurunkan Al-Quran kepadamu supaya kamu menjadi susah). Al-Quran adalah peringatan dan rahmat.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-teal-500">
                "Dan aku belum pernah kecewa dalam berdoa kepada-Mu, wahai Tuhanku." (Maryam: 4)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Keyakinan Nabi Zakaria dalam berdoa adalah teladan bagi kita. Jangan pernah berputus asa dari rahmat dan jawapan Allah.
              </p>
            </Card>

            <Card title="Hadis Pilihan">
              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-xl italic text-sm text-amber-900 border-l-4 border-amber-500">
                "Sebaik-baik wanita di dunia adalah empat orang: Maryam binti Imran, Khadijah binti Khuwailid, Fatimah binti Muhammad, dan Asiyah binti Muzahim." (HR. Tirmidzi)
              </div>
              <p className="mt-4 text-xs text-amber-700 leading-relaxed">
                Mengiktiraf kemuliaan Maryam yang kisahnya menjadi inti pati Surah Maryam dalam Juz ini.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Wind className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Berdoa dengan penuh keyakinan dan rendah hati.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Wind className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Menggunakan kata-kata yang lembut dalam berdakwah atau menegur.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Wind className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Mengkaji kisah Nabi Musa untuk mengambil ibrah keteguhan.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz17 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 17</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Anbiya: 1 - Al-Hajj: 78</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Kepasrahan Para Nabi, Hari Kiamat & Ibadah Haji.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Pengabdian</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-xs font-medium">Umat</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Target className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Tujuan</span>
            </div>
            <ArrowRight className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Taqwa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 17">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ScrollText className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Rangkaian Doa Para Nabi (Al-Anbiya)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Gegaran Hari Kiamat (Al-Hajj)</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Pensyariatan Haji & Jihad</span>
              </li>
            </ul>
          </Card>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50">
            <h3 className="font-bold text-blue-900 mb-2">Satu Umat</h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              "Inna hadzihi ummatukum ummatan wahidah." Semua nabi membawa risalah yang sama: mentauhidkan Allah. Kita adalah satu umat yang besar.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Al-Anbiya: Doa sebagai Senjata">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl text-center">
                <Waves className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-bold block mb-1">Nabi Yunus</span>
                <p className="text-[10px] text-slate-500">Doa dalam perut ikan (Zul Nun).</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl text-center">
                <Heart className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                <span className="text-xs font-bold block mb-1">Nabi Ayub</span>
                <p className="text-[10px] text-slate-500">Kesabaran dalam ujian penyakit.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl text-center">
                <Star className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <span className="text-xs font-bold block mb-1">Nabi Ibrahim</span>
                <p className="text-[10px] text-slate-500">Keselamatan dalam api yang sejuk.</p>
              </div>
            </div>
          </Card>

          <Card title="Al-Hajj: Pengabdian Zahir & Batin">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Shield className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Taqwa adalah Inti Ibadah</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Daging dan darah korban tidak sampai kepada Allah, tetapi yang sampai kepada-Nya adalah ketaqwaan dari hati kamu.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-blue-500">
                "Tidak ada Tuhan melainkan Engkau, Maha Suci Engkau, sesungguhnya aku adalah dari orang-orang yang zalim." (Al-Anbiya: 87)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Doa Nabi Yunus (Zul Nun) mengajarkan kita untuk sentiasa bertaubat dan mengakui kelemahan diri di hadapan keagungan Allah.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-xl italic text-sm text-amber-900 border-l-4 border-amber-500">
                "Sesiapa yang mengerjakan haji dan tidak melakukan rafath (perkataan kotor) serta tidak berbuat fasik, dia akan kembali seperti hari dia dilahirkan oleh ibunya." (HR. Bukhari)
              </div>
              <p className="mt-4 text-xs text-amber-700 leading-relaxed">
                Kelebihan ibadah Haji yang menjadi tema utama dalam Surah Al-Hajj dalam Juz ini.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Target className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Melazimi bacaan doa Nabi Yunus dalam sujud.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Target className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Memperbaharui niat ikhlas dalam setiap ibadah yang dilakukan.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Target className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Menghayati makna pengorbanan dalam kehidupan seharian.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz18 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 18</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Mu'minun: 1 - Al-Furqan: 20</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Ciri Mukmin Berjaya, Kesucian Diri & Cahaya Hidayah.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Kejayaan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Iffah</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Lightbulb className="w-6 h-6 text-amber-500" />
              <span className="text-xs font-medium">Nur</span>
            </div>
            <ArrowRight className="w-6 h-6 text-teal-600" />
            <div className="flex flex-col items-center gap-1">
              <Star className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Falah</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 18">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Sifat Mukmin Berjaya (Al-Mu'minun)</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Adab Sosial & Kesucian (An-Nur)</span>
              </li>
              <li className="flex items-start gap-3">
                <ScaleIcon className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Al-Furqan (Pembeda Haq & Batil)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-amber-50 border border-amber-100 dark:border-amber-800/50 dark:border-amber-800/50">
            <h3 className="font-bold text-amber-900 mb-2">Cahaya Allah</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              "Allahu nurus-samawati wal-ardh." Allah adalah cahaya langit dan bumi. Hidayah-Nya menerangi hati yang bersih.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="An-Nur: Menjaga Kesucian Masyarakat">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Adab Meminta Izin</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kepentingan menjaga privasi dan kehormatan rumahtangga sebagai asas keharmonian sosial.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Menundukkan Pandangan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Perintah kepada lelaki dan wanita mukmin untuk menjaga pandangan dan kemaluan demi kesucian hati.</p>
              </div>
            </div>
          </Card>

          <Card title="Al-Mu'minun: Tangga Kejayaan">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Star className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Khusyuk dalam Solat</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Ciri pertama mukmin yang berjaya adalah mereka yang khusyuk dalam solatnya. Solat adalah tunjang kekuatan rohani.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Allah (Pemberi) cahaya (kepada) langit dan bumi. Perumpamaan cahaya Allah adalah seperti sebuah lubang yang tak tembus..." (An-Nur: 35)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Hidayah Allah adalah cahaya yang menerangi kegelapan hati. Jagalah kesucian diri agar cahaya itu terus bersinar.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl italic text-sm text-blue-900 border-l-4 border-blue-500">
                "Sesungguhnya Allah itu Maha Indah dan sukakan keindahan." (HR. Muslim)
              </div>
              <p className="mt-4 text-xs text-blue-700 leading-relaxed">
                Hadith ini selari dengan tema kesucian dan adab yang ditekankan dalam Surah An-Nur.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Berusaha mencapai khusyuk dengan memahami bacaan solat.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Menjaga pandangan mata daripada perkara yang tidak diredhai.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Meminta izin sebelum memasuki rumah atau bilik orang lain.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz19 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 19</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Furqan: 21 - An-Naml: 55</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Pembeda Haq, Kisah Para Rasul & Keajaiban Semesta.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Kebenaran</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <ScaleIcon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              <span className="text-xs font-medium">Adil</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Bird className="w-6 h-6 text-amber-600" />
              <span className="text-xs font-medium">Ilmu</span>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Teguh</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 19">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Ibadurrahman (Hamba Allah yang Maha Pemurah)</span>
              </li>
              <li className="flex items-start gap-3">
                <ScrollText className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Siri Kisah Para Nabi (Ash-Shu'ara)</span>
              </li>
              <li className="flex items-start gap-3">
                <Bird className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kerajaan Sulaiman & Semut (An-Naml)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-slate-900 text-white p-6 rounded-2xl">
            <h3 className="font-bold mb-2">Ibadurrahman</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hamba-hamba Allah yang berjalan di bumi dengan rendah hati, dan apabila orang jahil menyapa mereka, mereka membalas dengan kata-kata yang sejahtera.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Ash-Shu'ara: Kebenaran yang Menang">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Pola Dakwah Para Nabi</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Nuh, Hud, Saleh, Luth, dan Syuaib semuanya berkata: "Aku tidak meminta upah kepadamu, upahku hanyalah dari Tuhan semesta alam."</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Mukjizat vs Sihir</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kemenangan Musa ke atas ahli sihir Firaun membuktikan bahawa kebenaran wahyu mengatasi segala tipu daya manusia.</p>
              </div>
            </div>
          </Card>

          <Card title="An-Naml: Ilmu & Kesyukuran">
            <div className="flex items-start gap-4 bg-amber-50 dark:bg-amber-900/30 p-6 rounded-xl border border-amber-100 dark:border-amber-800/50">
              <Bird className="w-10 h-10 text-amber-700 shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 mb-2">Kurniaan kepada Sulaiman</h4>
                <p className="text-sm text-amber-600 leading-relaxed">
                  Nabi Sulaiman memahami bahasa burung dan semut. Baginda menggunakan kekuasaan untuk dakwah, bukan untuk kesombongan. "Hadza min fadhli Rabbi."
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-slate-500">
                "Dan hamba-hamba Tuhan yang Maha Penyayang itu ialah orang-orang yang berjalan di atas bumi dengan rendah hati." (Al-Furqan: 63)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ketinggian darjat di sisi Allah dicapai melalui kerendahan hati (tawadhu') dan kesabaran menghadapi gangguan manusia.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-xl italic text-sm text-teal-900 border-l-4 border-teal-500">
                "Permudahkanlah dan jangan kamu menyukarkan." (HR. Bukhari)
              </div>
              <p className="mt-4 text-xs text-teal-700 leading-relaxed">
                Prinsip kemudahan dalam agama yang dibawa oleh para Nabi sebagaimana diceritakan dalam Surah Ash-Shu'ara'.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Bird className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Mengamalkan sikap rendah hati dalam pergaulan seharian.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Bird className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Menjauhi perdebatan yang tidak membawa manfaat.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Bird className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Sentiasa bersyukur atas setiap ilmu dan kelebihan yang dimiliki.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz20 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 20</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">An-Naml: 56 - Al-Ankabut: 45</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Pertolongan Allah, Kisah Musa & Ujian Fitnah Harta.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Pertolongan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Building className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              <span className="text-xs font-medium">Istana</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Waves className="w-6 h-6 text-blue-600" />
              <span className="text-xs font-medium">Laut</span>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            <div className="flex flex-col items-center gap-1">
              <Target className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Nasr</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 20">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Building className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kisah Musa & Firaun (Al-Qasas)</span>
              </li>
              <li className="flex items-start gap-3">
                <Coins className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Fitnah Qarun (Harta & Kesombongan)</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Ujian Iman (Al-Ankabut)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <h3 className="font-bold text-rose-900 mb-2">Rumah Labah-Labah</h3>
            <p className="text-sm text-rose-800 leading-relaxed">
              Perumpamaan mereka yang mengambil pelindung selain Allah seperti labah-labah yang membina rumah. Sesungguhnya rumah yang paling rapuh adalah rumah labah-labah.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Al-Qasas: Dari Kelemahan ke Kekuatan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Pertolongan kepada yang Lemah</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Allah menghendaki untuk memberi kurniaan kepada orang-orang yang tertindas dan menjadikan mereka pemimpin.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kisah Qarun</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kekayaan yang melimpah ruah tidak berguna jika disertai kesombongan. Akhirnya bumi menelan Qarun dan hartanya.</p>
              </div>
            </div>
          </Card>

          <Card title="Al-Ankabut: Hakikat Ujian">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <AlertTriangle className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Adakah Manusia Dibiarkan?</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  "Ahasiban-nasu an yutraku an yaqulu amanna wahum la yuftanun?" Adakah manusia menyangka mereka akan dibiarkan berkata "kami beriman" sedangkan mereka belum diuji?
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-rose-500">
                "Dan carilah pada apa yang telah dianugerahkan Allah kepadamu (kebahagiaan) negeri akhirat, dan janganlah kamu melupakan bahagianmu dari (kenikmatan) duniawi." (Al-Qasas: 77)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Keseimbangan antara dunia dan akhirat. Gunakan nikmat dunia sebagai jambatan untuk mencapai keredhaan Allah di akhirat.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-rose-50 p-4 rounded-xl italic text-sm text-rose-900 border-l-4 border-rose-500">
                "Besarnya ganjaran itu bergantung kepada besarnya ujian." (HR. Tirmidzi)
              </div>
              <p className="mt-4 text-xs text-rose-700 leading-relaxed">
                Memberi kekuatan dalam menghadapi ujian iman sebagaimana yang ditekankan dalam Surah Al-Ankabut.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Target className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Bersabar dalam menghadapi ujian iman dan kehidupan.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Target className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Menjauhkan diri daripada sifat sombong seperti Qarun.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Target className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Memastikan setiap harta yang dimiliki digunakan pada jalan kebaikan.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz21 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 21</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Ankabut: 46 - Al-Ahzab: 30</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Tanda Kebesaran Allah, Hikmah Luqman & Kepatuhan.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Hikmah</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Leaf className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Adab</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Mountain className="w-6 h-6 text-slate-600 dark:text-slate-400" />
              <span className="text-xs font-medium">Teguh</span>
            </div>
            <ArrowRight className="w-6 h-6 text-teal-600" />
            <div className="flex flex-col items-center gap-1">
              <Lightbulb className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Nur</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 21">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Tanda Kekuasaan Allah (Ar-Rum)</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Wasiat Hikmah Luqman al-Hakim</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kepatuhan & Perang Ahzab</span>
              </li>
            </ul>
          </Card>
          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-2xl border border-teal-100 dark:border-teal-800/50">
            <h3 className="font-bold text-teal-900 mb-2">Ketenangan dalam Pasangan</h3>
            <p className="text-sm text-teal-800 leading-relaxed">
              "Litaskunu ilaiha wa ja'ala bainakum mawaddatan wa rahmah." Allah menciptakan pasangan agar kamu merasa tenang dan menanamkan kasih sayang.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Luqman: Madrasah Akhlak">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tauhid & Syukur</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Wasiat pertama Luqman kepada anaknya adalah jangan menyekutukan Allah, kerana syirik adalah kezaliman yang besar.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Adab Berjalan & Berbicara</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Jangan memalingkan muka daripada manusia dengan sombong dan jangan berjalan di bumi dengan angkuh.</p>
              </div>
            </div>
          </Card>

          <Card title="As-Sajdah: Tunduk kepada Pencipta">
            <div className="flex items-start gap-4 bg-slate-900 text-white p-6 rounded-xl shadow-xl">
              <Target className="w-10 h-10 text-teal-400 shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Sujud Tilawah</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Orang yang benar-benar beriman apabila diberi peringatan dengan ayat-ayat Allah, mereka menyungkur sujud dan bertasbih memuji Tuhan mereka.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-teal-500">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya." (Ar-Rum: 21)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Keluarga adalah institusi ketenangan. Mawaddah dan Rahmah adalah anugerah Allah yang perlu dijaga dengan iman.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-xl italic text-sm text-teal-900 border-l-4 border-teal-500">
                "Sebaik-baik kamu adalah yang paling baik terhadap keluarganya." (HR. Tirmidzi)
              </div>
              <p className="mt-4 text-xs text-teal-700 leading-relaxed">
                Hadith ini selari dengan tema mawaddah dan rahmah dalam keluarga yang disebut dalam Surah Ar-Rum.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Leaf className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Melakukan sujud tilawah apabila membaca ayat sajadah.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Leaf className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Memberi perhatian dan kasih sayang kepada ahli keluarga.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Leaf className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Mengamalkan adab-adab Luqman dalam berkomunikasi.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz22 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 22</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Ahzab: 31 - Ya-Sin: 27</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Kemuliaan Akhlak, Kesyukuran & Kebenaran Kebangkitan.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Kemuliaan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <User className="w-6 h-6 text-blue-600" />
              <span className="text-xs font-medium">Uswah</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <History className="w-6 h-6 text-amber-600" />
              <span className="text-xs font-medium">Ibrah</span>
            </div>
            <ArrowRight className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col items-center gap-1">
              <Infinity className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Baqi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 22">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <User className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Adab Isteri Nabi & Hijab (Al-Ahzab)</span>
              </li>
              <li className="flex items-start gap-3">
                <Building className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kesyukuran Kerajaan Saba' (Saba')</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Hati Al-Quran (Permulaan Ya-Sin)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-amber-50 border border-amber-100 dark:border-amber-800/50 dark:border-amber-800/50">
            <h3 className="font-bold text-amber-900 mb-2">Pencipta yang Maha Hebat</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Surah Fatir mengingatkan kita bahawa Allah adalah Pencipta langit dan bumi yang mengurniakan sayap kepada malaikat. Segala kemuliaan hanya milik Allah.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Saba': Antara Syukur & Kufur">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kesyukuran Daud & Sulaiman</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Mereka dikurniakan kekuasaan yang luar biasa namun tetap tunduk dan bersyukur kepada Allah.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kehancuran Empangan Ma'rib</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kaum Saba' yang berpaling daripada syukur akhirnya dihukum dengan banjir besar yang memusnahkan tamadun mereka.</p>
              </div>
            </div>
          </Card>

          <Card title="Ya-Sin: Peringatan bagi yang Hidup">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Heart className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Risalah Kebenaran</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Ya-Sin menegaskan kebenaran kerasulan Nabi Muhammad SAW dan Al-Quran sebagai peringatan bagi orang-orang yang hatinya masih hidup.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-blue-500">
                "Sesungguhnya telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu (iaitu) bagi orang yang mengharap (rahmat) Allah dan (kedatangan) hari kiamat." (Al-Ahzab: 21)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Nabi Muhammad SAW adalah model terbaik dalam setiap aspek kehidupan. Mengikuti baginda adalah jalan menuju kejayaan.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl italic text-sm text-blue-900 border-l-4 border-blue-500">
                "Sesiapa yang berselawat ke atasku sekali, Allah akan berselawat ke atasnya sepuluh kali." (HR. Muslim)
              </div>
              <p className="mt-4 text-xs text-blue-700 leading-relaxed">
                Hadith ini selari dengan perintah berselawat dalam Surah Al-Ahzab yang terdapat dalam Juz ini.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <History className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Mempelajari satu sunnah Nabi dan mengamalkannya.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <History className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Memperbanyakkan selawat ke atas Nabi Muhammad SAW.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <History className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Membaca Surah Ya-Sin dengan tadabbur maknanya.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz23 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 23</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Ya-Sin: 28 - Az-Zumar: 31</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Keagungan Pencipta, Saf Para Malaikat & Ikhlas.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Ketundukan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Layers className="w-6 h-6 text-indigo-600" />
              <span className="text-xs font-medium">Saf</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Target className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Ikhlas</span>
            </div>
            <ArrowRight className="w-6 h-6 text-indigo-600" />
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Salam</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 23">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Tanda Kebangkitan (Penutup Ya-Sin)</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Saf Malaikat & Tauhid (As-Saffat)</span>
              </li>
              <li className="flex items-start gap-3">
                <History className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kisah Daud, Sulaiman & Ayub (Sad)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
            <h3 className="font-bold text-indigo-900 mb-2">Ikhlas dalam Beragama</h3>
            <p className="text-sm text-indigo-800 leading-relaxed">
              Surah Az-Zumar menekankan kepentingan memurnikan ketaatan hanya kepada Allah. Ikhlas adalah roh kepada setiap amalan.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="As-Saffat: Keteguhan Tauhid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Ujian Pengorbanan Ibrahim</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kisah penyembelihan Ismail sebagai bukti ketaatan mutlak Ibrahim kepada perintah Allah.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kemenangan Para Rasul</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Allah menjanjikan kemenangan kepada hamba-hamba-Nya yang diutus dan tentera-Nya pasti akan menang.</p>
              </div>
            </div>
          </Card>

          <Card title="Sad: Hikmah & Kesabaran">
            <div className="flex items-start gap-4 bg-amber-50 dark:bg-amber-900/30 p-6 rounded-xl border border-amber-100 dark:border-amber-800/50">
              <History className="w-10 h-10 text-amber-700 shrink-0" />
              <div>
                <h4 className="font-bold text-amber-900 mb-2">Kembali kepada Allah</h4>
                <p className="text-sm text-amber-600 leading-relaxed">
                  Kisah para nabi dalam surah ini menunjukkan bagaimana mereka sentiasa "Awwab" (kembali bertaubat) kepada Allah dalam setiap keadaan.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-indigo-500">
                "Katakanlah: Wahai hamba-hamba-Ku yang melampaui batas terhadap diri mereka sendiri, janganlah kamu berputus asa dari rahmat Allah." (Az-Zumar: 53)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Pintu taubat sentiasa terbuka luas. Walau sejauh mana kita tersesat, rahmat Allah sentiasa menanti kepulangan kita.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-xl italic text-sm text-teal-900 border-l-4 border-teal-500">
                "Sesungguhnya setiap amalan itu bergantung kepada niat." (HR. Bukhari)
              </div>
              <p className="mt-4 text-xs text-teal-700 leading-relaxed">
                Keikhlasan niat adalah tema utama dalam Surah Az-Zumar (Golongan-golongan) yang bermaksud memurnikan ketaatan.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Layers className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium">Melakukan muhasabah diri setiap malam sebelum tidur.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Layers className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium">Memurnikan niat agar setiap amalan hanya kerana Allah.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Layers className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium">Mengkaji kisah kesabaran Nabi Ayub A.S.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz24 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 24</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Az-Zumar: 32 - Fussilat: 46</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Harapan Pengampunan, Dakwah & Keteguhan Iman.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Harapan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <HandHeart className="w-6 h-6 text-rose-600" />
              <span className="text-xs font-medium">Rahmat</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Target className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Dakwah</span>
            </div>
            <ArrowRight className="w-6 h-6 text-rose-600" />
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Istiqamah</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 24">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HandHeart className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Jangan Berputus Asa (Az-Zumar)</span>
              </li>
              <li className="flex items-start gap-3">
                <User className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Lelaki Beriman dari Keluarga Firaun (Ghafir)</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Dakwah yang Terbaik (Fussilat)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <h3 className="font-bold text-rose-900 mb-2">Rahmat Allah yang Luas</h3>
            <p className="text-sm text-rose-800 leading-relaxed">
              "La taqnatu min rahmatillah." Janganlah kamu berputus asa daripada rahmat Allah. Sesungguhnya Allah mengampunkan segala dosa.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Ghafir: Tuhan yang Maha Pengampun">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Doa Malaikat</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Malaikat pemikul Arasy sentiasa memohon ampun bagi orang-orang yang beriman dan bertaubat.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kekuatan Doa</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">"Ud'uni astajib lakum." Berdoalah kepada-Ku, nescaya Aku akan perkenankan doa kamu.</p>
              </div>
            </div>
          </Card>

          <Card title="Fussilat: Keajaiban Dakwah">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Target className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Siapakah yang Lebih Baik?</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Siapakah yang lebih baik perkataannya daripada orang yang menyeru kepada Allah, beramal soleh, dan berkata: "Sesungguhnya aku dari kalangan orang Islam."
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-rose-500">
                "Dan Tuhanmu berfirman: Berdoalah kepada-Ku, nescaya akan Kuperkenankan bagimu." (Ghafir: 60)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Janji Allah untuk memperkenankan doa hamba-Nya. Doa adalah jambatan komunikasi yang paling ampuh antara hamba dan Pencipta.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-xl italic text-sm text-amber-900 border-l-4 border-amber-500">
                "Semua anak Adam melakukan kesilapan, dan sebaik-baik orang yang melakukan kesilapan adalah mereka yang bertaubat." (HR. Tirmidzi)
              </div>
              <p className="mt-4 text-xs text-amber-700 leading-relaxed">
                Hadith ini selari dengan nama Surah Ghafir (Maha Pengampun) yang menekankan keluasan ampunan Allah.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <HandHeart className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Memperbanyakkan doa dengan penuh pengharapan.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <HandHeart className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Istiqamah dalam menyampaikan kebenaran walaupun sedikit.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <HandHeart className="w-3 h-3 text-rose-600" />
                  </div>
                  <span className="text-xs font-medium">Membalas kejahatan dengan kebaikan (Fussilat: 34).</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz25 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 25</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Fussilat: 47 - Al-Jathiyah: 37</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Wahyu, Musyawarah & Tanda Kebesaran Allah.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Kesepakatan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <span className="text-xs font-medium">Syura</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Globe className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Ayat</span>
            </div>
            <ArrowRight className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col items-center gap-1">
              <ScaleIcon className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Adil</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 25">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Prinsip Musyawarah (Ash-Shura)</span>
              </li>
              <li className="flex items-start gap-3">
                <Gem className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Perhiasan Dunia vs Akhirat (Az-Zukhruf)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Peringatan Asap (Ad-Dukhan)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50">
            <h3 className="font-bold text-blue-900 mb-2">Musyawarah (Syura)</h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              Salah satu ciri orang beriman adalah urusan mereka diputuskan melalui musyawarah. Ini adalah asas kepimpinan dan keharmonian dalam Islam.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Az-Zukhruf: Hakikat Perhiasan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Emas & Perak</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Kekayaan dunia hanyalah kesenangan sementara. Di sisi Allah, perhiasan yang sebenar adalah ketaqwaan.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Mengikut Jejak Langkah</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Larangan mengikut tradisi nenek moyang secara buta tuli tanpa menggunakan akal dan wahyu.</p>
              </div>
            </div>
          </Card>

          <Card title="Al-Jathiyah: Tanda-tanda bagi yang Yakin">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Globe className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Ayat-ayat di Alam Semesta</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Penciptaan langit, bumi, pertukaran malam dan siang, serta rezeki dari langit adalah tanda-tanda kekuasaan Allah bagi kaum yang berfikir.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-blue-500">
                "Dan urusan mereka (diputuskan) dengan musyawarah antara mereka." (Ash-Shura: 38)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Musyawarah adalah kunci keharmonian dan keberkatan dalam setiap keputusan bersama.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-rose-50 p-4 rounded-xl italic text-sm text-rose-900 border-l-4 border-rose-500">
                "Dunia ini adalah penjara bagi orang mukmin dan syurga bagi orang kafir." (HR. Muslim)
              </div>
              <p className="mt-4 text-xs text-rose-700 leading-relaxed">
                Peringatan agar tidak terpedaya dengan perhiasan dunia yang sementara sebagaimana disebut dalam Surah Az-Zukhruf.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Mengamalkan musyawarah dalam keluarga atau organisasi.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Memerhatikan tanda-tanda kebesaran Allah di alam sekitar.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Menjaga diri daripada terpedaya dengan perhiasan dunia.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz26 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 26</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Ahqaf: 1 - Adh-Dhariyat: 30</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Kemenangan Nyata, Adab Sosial & Hakikat Akhirat.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Kemenangan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Trophy className="w-6 h-6 text-amber-600" />
              <span className="text-xs font-medium">Fath</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Users className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Adab</span>
            </div>
            <ArrowRight className="w-6 h-6 text-amber-600" />
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Izzah</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 26">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kemenangan yang Nyata (Al-Fath)</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Adab Berinteraksi (Al-Hujurat)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Hakikat Kematian & Kebangkitan (Qaf)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-2xl border border-teal-100 dark:border-teal-800/50">
            <h3 className="font-bold text-teal-900 mb-2">Surah Al-Hujurat</h3>
            <p className="text-sm text-teal-800 leading-relaxed">
              Dikenali sebagai "Surah Akhlak". Ia mengajar adab terhadap Rasulullah, adab menerima berita, dan larangan menghina atau mengumpat orang lain.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Al-Fath: Ketenangan dalam Perjuangan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Sakinah (Ketenangan)</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Allah menurunkan ketenangan ke dalam hati orang beriman agar iman mereka bertambah di tengah ujian.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Bai'atur Ridwan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Janji setia para sahabat di bawah pohon yang diredhai Allah, simbol kesetiaan mutlak kepada perjuangan.</p>
              </div>
            </div>
          </Card>

          <Card title="Qaf: Peringatan yang Menggetarkan">
            <div className="flex items-start gap-4 bg-slate-900 text-white p-6 rounded-xl shadow-xl">
              <Zap className="w-10 h-10 text-amber-400 shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Dekatnya Allah</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  "Wa nahnu aqrabu ilaihi min hablil warid." Kami lebih dekat kepadanya (manusia) daripada urat lehernya sendiri. Allah Maha Mengetahui setiap bisikan hati.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-teal-500">
                "Sesungguhnya orang-orang mukmin itu bersaudara, kerana itu damaikanlah antara kedua saudaramu." (Al-Hujurat: 10)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ukhuwah Islamiyah adalah ikatan yang paling kuat. Perdamaian dan kasih sayang antara mukmin adalah tanda kesempurnaan iman.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-xl italic text-sm text-teal-900 border-l-4 border-teal-500">
                "Seorang muslim itu adalah apabila muslim yang lain selamat dari lidah dan tangannya." (HR. Bukhari)
              </div>
              <p className="mt-4 text-xs text-teal-700 leading-relaxed">
                Hadith ini menekankan akhlak dan adab berinteraksi yang menjadi tema utama dalam Surah Al-Hujurat.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Users className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Menjaga lidah daripada mengumpat atau menghina orang lain.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Users className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Memastikan kebenaran sesuatu berita sebelum menyebarkannya (Tabayyun).</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Users className="w-3 h-3 text-teal-600" />
                  </div>
                  <span className="text-xs font-medium">Berusaha mendamaikan perselisihan antara rakan atau keluarga.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz27 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 27</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Adh-Dhariyat: 31 - Al-Hadid: 29</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Nikmat Allah, Keindahan Ciptaan & Kepasrahan.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Kesyukuran</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <span className="text-xs font-medium">Indah</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <HandHeart className="w-6 h-6 text-rose-600" />
              <span className="text-xs font-medium">Rahmat</span>
            </div>
            <ArrowRight className="w-6 h-6 text-amber-500" />
            <div className="flex flex-col items-center gap-1">
              <Heart className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Syukur</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 27">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Nikmat yang Mana Kamu Dustakan? (Ar-Rahman)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Golongan Kanan & Kiri (Al-Waqi'ah)</span>
              </li>
              <li className="flex items-start gap-3">
                <Building className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Besi & Kekuatan (Al-Hadid)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <h3 className="font-bold text-rose-900 mb-2">Ar-Rahman</h3>
            <p className="text-sm text-rose-800 leading-relaxed">
              Surah yang sangat indah menceritakan tentang rahmat Allah. Diulang 31 kali: "Fabi ayyi ala'i Rabbikuma tukadzdziban" sebagai peringatan untuk sentiasa bersyukur.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Al-Waqi'ah: Hari yang Pasti Berlaku">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tiga Golongan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">As-Sabiqun (yang terdahulu beriman), Ashabul Yamin (golongan kanan), dan Ashabul Shimal (golongan kiri).</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Tanda Kekuasaan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Dari air yang diminum hingga api yang dinyalakan, semuanya adalah peringatan tentang kebesaran Allah.</p>
              </div>
            </div>
          </Card>

          <Card title="Al-Hadid: Keseimbangan Iman & Amal">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Building className="w-10 h-10 text-slate-700 dark:text-slate-300 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Pinjaman yang Baik</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Sesiapa yang memberi pinjaman kepada Allah dengan pinjaman yang baik (infaq), Allah akan melipatgandakan balasannya dan baginya pahala yang mulia.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Maka nikmat Tuhan kamu yang manakah yang kamu dustakan?" (Ar-Rahman: 13)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Peringatan yang berulang-ulang untuk menyedarkan kita tentang limpahan rahmat Allah yang tidak terhitung.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-xl italic text-sm text-amber-900 border-l-4 border-amber-500">
                "Sesiapa yang membaca Surah Al-Waqi'ah setiap malam, dia tidak akan ditimpa kefakiran selama-lamanya." (HR. Al-Baihaqi)
              </div>
              <p className="mt-4 text-xs text-amber-700 leading-relaxed">
                Kelebihan Surah Al-Waqi'ah yang terdapat dalam Juz ini sebagai pembuka pintu rezeki dan penghalang kefakiran.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Menyenaraikan 3 nikmat Allah yang disyukuri setiap hari.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Memberi sedekah atau infaq walaupun dalam jumlah yang kecil.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Membaca Surah Al-Waqi'ah untuk memohon kelapangan rezeki.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz28 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 28</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Mujadilah: 1 - At-Tahrim: 12</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Kehidupan Beragama, Rumahtangga & Ketaatan.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Keharmonian</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Home className="w-6 h-6 text-blue-600" />
              <span className="text-xs font-medium">Rumah</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Heart className="w-6 h-6 text-rose-600" />
              <span className="text-xs font-medium">Kasih</span>
            </div>
            <ArrowRight className="w-6 h-6 text-blue-600" />
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Sakinah</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 28">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Wanita yang Mengadu (Al-Mujadilah)</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Ukhuwah & Perpaduan (Al-Hashr)</span>
              </li>
              <li className="flex items-start gap-3">
                <Home className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Tanggungjawab Keluarga (At-Tahrim)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50">
            <h3 className="font-bold text-blue-900 mb-2">Pelihara Diri & Keluarga</h3>
            <p className="text-sm text-blue-800 leading-relaxed">
              "Qu anfusakum wa ahlikum nara." Peliharalah dirimu dan keluargamu daripada api neraka. Tanggungjawab ketua keluarga dalam mendidik agama.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Al-Hashr: Keagungan Nama Allah">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Al-Asmaul Husna</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Penutup surah ini mengandungi rangkaian nama-nama Allah yang agung: Al-Malik, Al-Quddus, Al-Salam, Al-Mu'min.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kekuatan Al-Quran</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Sekiranya Al-Quran diturunkan ke atas gunung, nescaya gunung itu akan tunduk terpecah-belah kerana takut kepada Allah.</p>
              </div>
            </div>
          </Card>

          <Card title="Al-Jumu'ah: Kepentingan Ilmu & Amal">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Building className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Seruan Solat Jumaat</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Apabila diserukan azan untuk solat Jumaat, segeralah mengingati Allah dan tinggalkanlah jual-beli. Itu lebih baik bagi kamu.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-blue-500">
                "Peliharalah dirimu dan keluargamu dari api neraka." (At-Tahrim: 6)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Tanggungjawab utama seorang mukmin adalah menjaga keselamatan iman diri dan ahli keluarganya.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl italic text-sm text-blue-900 border-l-4 border-blue-500">
                "Sebaik-baik kamu adalah yang paling baik terhadap keluarganya." (HR. Tirmidzi)
              </div>
              <p className="mt-4 text-xs text-blue-700 leading-relaxed">
                Hadith ini selari dengan tema tanggungjawab keluarga yang ditekankan dalam Surah At-Tahrim.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Home className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Mengadakan sesi tadabbur atau pengajian ringkas bersama keluarga.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Home className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Hadir awal ke masjid untuk solat Jumaat.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Home className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">Sentiasa mendoakan kebaikan untuk ibu bapa dan ahli keluarga.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz29 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 29</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">Al-Mulk: 1 - Al-Mursalat: 50</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Kekuasaan Mutlak, Ujian Hidup & Berita Akhirat.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Kekuasaan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Globe className="w-6 h-6 text-indigo-600" />
              <span className="text-xs font-medium">Mulk</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-6 h-6 text-amber-500" />
              <span className="text-xs font-medium">Qalam</span>
            </div>
            <ArrowRight className="w-6 h-6 text-indigo-600" />
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Yaqin</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 29">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kerajaan Allah & Ujian Mati Hidup (Al-Mulk)</span>
              </li>
              <li className="flex items-start gap-3">
                <Feather className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Akhlak Rasulullah (Al-Qalam)</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Kiamat yang Pasti (Al-Haqqah)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
            <h3 className="font-bold text-indigo-900 mb-2">Surah Al-Mulk</h3>
            <p className="text-sm text-indigo-800 leading-relaxed">
              Surah pencegah azab kubur. Allah menciptakan mati dan hidup untuk menguji siapa di antara kamu yang paling baik amalannya.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Al-Qalam: Akhlak yang Agung">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Pujian kepada Nabi</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">"Wa innaka la'ala khuluqin 'adhim." Sesungguhnya engkau (Muhammad) mempunyai akhlak yang sangat agung.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Kisah Pemilik Kebun</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Peringatan tentang akibat kedekut dan tidak mahu berkongsi rezeki dengan orang miskin.</p>
              </div>
            </div>
          </Card>

          <Card title="Al-Muzzammil & Al-Muddathir">
            <div className="flex items-start gap-4 bg-slate-900 text-white p-6 rounded-xl shadow-xl">
              <Moon className="w-10 h-10 text-indigo-400 shrink-0" />
              <div>
                <h4 className="font-bold mb-2">Persediaan Rohani</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Perintah bangun malam (Qiyamullail) untuk menguatkan jiwa sebelum memikul tanggungjawab dakwah yang berat di siang hari.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-indigo-500">
                "Dia menciptakan mati dan hidup, untuk menguji kamu, siapa di antara kamu yang lebih baik amalnya." (Al-Mulk: 2)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Hidup adalah pentas ujian. Kualiti amalan (Ihsan) lebih utama daripada kuantiti semata-mata.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-indigo-50 p-4 rounded-xl italic text-sm text-indigo-900 border-l-4 border-indigo-500">
                "Sesungguhnya Surah dalam Al-Quran yang mempunyai tiga puluh ayat (Al-Mulk) telah memberi syafaat kepada seorang lelaki sehingga dia diampunkan." (HR. Abu Daud & Tirmidzi)
              </div>
              <p className="mt-4 text-xs text-indigo-700 leading-relaxed">
                Hadith ini menekankan kelebihan Surah Al-Mulk yang menjadi pembuka Juz ini sebagai pelindung dan pemberi syafaat di alam kubur.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Globe className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium">Mengamalkan bacaan Surah Al-Mulk setiap malam sebelum tidur.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Globe className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium">Melakukan Qiyamullail walaupun sekadar dua rakaat.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Globe className="w-3 h-3 text-indigo-600" />
                  </div>
                  <span className="text-xs font-medium">Menjaga akhlak dan tutur kata dalam setiap keadaan.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuz30 = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-1 text-slate-900 dark:text-white">Tadabbur Al Quran Juz 30</h1>
          <h2 className="text-lg text-slate-700 dark:text-slate-300 mb-2">An-Naba: 1 - An-Nas: 6</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Berita Besar, Peringatan Akhir Zaman & Perlindungan.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-bold text-slate-800 leading-tight">Pilar<br/>Perlindungan</div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-6 h-6 text-amber-500" />
              <span className="text-xs font-medium">Naba'</span>
            </div>
            <span className="text-lg font-bold text-slate-400">+</span>
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-6 h-6 text-teal-600" />
              <span className="text-xs font-medium">Hifz</span>
            </div>
            <ArrowRight className="w-6 h-6 text-amber-500" />
            <div className="flex flex-col items-center gap-1">
              <Star className="w-6 h-6 text-slate-800" />
              <span className="text-xs font-medium">Fauz</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
        <div className="lg:col-span-4 space-y-10">
          <Card title="Peta Besar Juz 30">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Tema Utama</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Berita Besar Hari Kiamat (An-Naba')</span>
              </li>
              <li className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Sumpah Masa & Fenomena Alam</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-slate-600 dark:text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium">Perlindungan & Tauhid (Mu'awwidzatain)</span>
              </li>
            </ul>
          </Card>
          <div className="bg-amber-50 border border-amber-100 dark:border-amber-800/50 dark:border-amber-800/50">
            <h3 className="font-bold text-amber-900 mb-2">Amma Yatasa'alun</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Juz Amma dimulakan dengan persoalan tentang berita besar (hari kiamat) yang sering dipertikaikan oleh manusia.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-10">
          <Card title="Surah-Surah Pendek: Mesej Besar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Al-Ikhlas: Teras Tauhid</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Menegaskan keesaan Allah yang mutlak. Tidak beranak dan tidak diperanakkan.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Al-Asr: Kerugian Manusia</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Manusia dalam kerugian kecuali mereka yang beriman, beramal soleh, dan berpesan-pesan dengan kebenaran serta kesabaran.</p>
              </div>
            </div>
          </Card>

          <Card title="Benteng Perlindungan Akhir">
            <div className="flex items-start gap-4 bg-teal-50 border border-teal-100 dark:border-teal-800/50 dark:border-teal-800/50">
              <Shield className="w-10 h-10 text-teal-700 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-2">Al-Falaq & An-Nas</h4>
                <p className="text-sm text-teal-600 leading-relaxed">
                  Memohon perlindungan daripada kejahatan makhluk, sihir, dan bisikan syaitan yang tersembunyi dalam dada manusia.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card title="Mutiara Tadabbur">
              <div className="bg-slate-50 p-4 rounded-xl italic text-sm text-slate-700 dark:text-slate-300 border-l-4 border-amber-500">
                "Katakanlah: Dialah Allah, Yang Maha Esa." (Al-Ikhlas: 1)
              </div>
              <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Tauhid adalah asas segala-galanya. Mengenal Allah dengan sifat-sifat-Nya yang sempurna adalah puncak ilmu.
              </p>
            </Card>

            <Card title="Hadith Pilihan">
              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-xl italic text-sm text-amber-900 border-l-4 border-amber-500">
                "Sesiapa yang membaca Al-Ikhlas sepuluh kali, Allah akan membina baginya sebuah istana di syurga." (HR. Ahmad)
              </div>
              <p className="mt-4 text-xs text-amber-700 leading-relaxed">
                Hadith ini menunjukkan keutamaan Surah Al-Ikhlas yang merupakan teras tauhid dalam Juz Amma ini.
              </p>
            </Card>

            <Card title="Checklist Amal">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Shield className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Mengamalkan bacaan 3 Qul (Ikhlas, Falaq, Nas) setiap pagi dan petang.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Shield className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Menghafal dan memahami makna surah-surah pendek dalam Juz Amma.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded border border-slate-200 flex items-center justify-center shrink-0">
                    <Shield className="w-3 h-3 text-amber-600" />
                  </div>
                  <span className="text-xs font-medium">Sentiasa memohon perlindungan Allah daripada godaan syaitan.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );

  const renderJuzContent = () => {
    const content = (() => {
      switch (currentJuz) {
        case 1: return renderJuz1();
        case 2: return renderJuz2();
        case 3: return renderJuz3();
        case 4: return renderJuz4();
        case 5: return renderJuz5();
        case 6: return renderJuz6();
        case 7: return renderJuz7();
        case 8: return renderJuz8();
        case 9: return renderJuz9();
        case 10: return renderJuz10();
        case 11: return renderJuz11();
        case 12: return renderJuz12();
        case 13: return renderJuz13();
        case 14: return renderJuz14();
        case 15: return renderJuz15();
        case 16: return renderJuz16();
        case 17: return renderJuz17();
        case 18: return renderJuz18();
        case 19: return renderJuz19();
        case 20: return renderJuz20();
        case 21: return renderJuz21();
        case 22: return renderJuz22();
        case 23: return renderJuz23();
        case 24: return renderJuz24();
        case 25: return renderJuz25();
        case 26: return renderJuz26();
        case 27: return renderJuz27();
        case 28: return renderJuz28();
        case 29: return renderJuz29();
        case 30: return renderJuz30();
        default: return (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
            <BookOpen className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">Kandungan Juz {currentJuz} akan ditambah tidak lama lagi.</p>
            <p className="text-sm">Sedang dalam proses tadabbur...</p>
          </div>
        );
      }
    })();

    return (
      <motion.div
        key={currentJuz}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {content}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen transition-colors duration-500 flex flex-col items-center selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden pt-6">
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl text-slate-600 dark:text-amber-400 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </motion.button>
      </div>

      <div className="max-w-6xl w-full flex flex-col items-center mb-8 gap-6 px-4 md:px-0">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full flex flex-col md:flex-row items-center justify-between glass-card p-3"
        >
          <button 
            onClick={() => setCurrentJuz(Math.max(1, currentJuz - 1))}
            disabled={currentJuz === 1}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl transition-all font-serif font-bold ${currentJuz === 1 ? 'text-slate-200 dark:text-slate-800 cursor-not-allowed' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95'}`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">Sebelumnya</span>
          </button>

          <div className="flex flex-col items-center gap-3 py-2">
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl px-4">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((j) => (
                <button
                  key={j}
                  onClick={() => setCurrentJuz(j)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg font-bold text-[10px] transition-all flex items-center justify-center border ${currentJuz === j ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105 border-transparent' : 'bg-white/50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400'}`}
                >
                  {j}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setCurrentJuz(Math.min(30, currentJuz + 1))}
            disabled={currentJuz === 30}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl transition-all font-serif font-bold ${currentJuz === 30 ? 'text-slate-200 dark:text-slate-800 cursor-not-allowed' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95'}`}
          >
            <span className="text-sm hidden sm:inline">Seterusnya</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      <div className="max-w-6xl w-full px-4 md:px-0">
        <AnimatePresence mode="wait">
          {renderJuzContent()}
        </AnimatePresence>
      </div>

      <footer className="mt-24 pb-12 text-center">
        <div className="inline-flex flex-col items-center">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-4 opacity-30"></div>
          <p className="text-[10px] text-slate-400 dark:text-slate-600 font-bold tracking-[0.2em] uppercase">
            Tadabbur Al Quran Series • Juz {currentJuz}
          </p>
        </div>
      </footer>
    </div>
  );
}
