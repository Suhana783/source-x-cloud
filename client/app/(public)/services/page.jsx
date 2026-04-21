import Navbar from "../components/common/navbar";
import HeroSercices from "../components/services/heroSercices.jsx";
import CardService from "../components/services/CardService.jsx";
import Footer from "../components/common/footer";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <HeroSercices />
            <CardService />
            <Footer />
        </main>
    );
}
