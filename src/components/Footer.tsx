import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  studioName?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

const Footer = ({
  studioName = "Estúdio Black",
  address = "Centro da cidade. Endereço detalhado após confirmação",
  phone = "(11) 99999-9999",
  email = "contato@estudioblack.com.br",
  socialLinks = {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
  },
}: FooterProps) => {
  return (
    <footer className="w-full text-white py-16 px-4 md:px-8 lg:px-12 border-t border-white/10 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Studio Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-display text-2xl tracking-tight">
            {studioName}
            <span className="ml-2 align-middle inline-block h-1.5 w-1.5 rounded-full bg-brand-red" />
          </h3>
          <p className="text-white/70 max-w-xs">
            Estúdio de tatuagem com estética escura, técnica e acabamento impecável.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-display text-2xl tracking-tight">Contato</h3>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin size={18} className="text-white/50" />
              <span className="text-white/70 text-sm">{address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-white/50" />
              <span className="text-white/70 text-sm">{phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-white/50" />
              <span className="text-white/70 text-sm">{email}</span>
            </div>
          </div>
        </div>

        {/* Hours & Newsletter */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-display text-2xl tracking-tight">Horário de Funcionamento</h3>
          <div className="text-white/70 text-sm">
            <p>Segunda a Sexta: 10h às 20h</p>
            <p>Sábado: 10h às 18h</p>
            <p>Domingo: Fechado</p>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-medium mb-2">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-l-full w-full focus:outline-none focus:ring-2 focus:ring-brand-red/50"
              />
              <Button
                variant="default"
                className="rounded-l-none rounded-r-full"
              >
                Assinar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
        <p>
          © {new Date().getFullYear()} {studioName}. Todos os direitos
          reservados. Desenvolvido por{" "}
          <a
            href="https://github.com/odevthoma"
            className="text-white hover:text-white/80 underline underline-offset-4 decoration-brand-red/70 transition-colors"
          >
            @odevthoma
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
