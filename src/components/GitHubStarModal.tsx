import React, { useState } from 'react';
import { X, Star, Copy, Check, Terminal, ExternalLink, Sparkles, Heart } from 'lucide-react';

interface GitHubStarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubStarModal: React.FC<GitHubStarModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const repoUrl = 'https://github.com/MatiasV3B/CourseLab';
  const cloneCommand = 'git clone https://github.com/MatiasV3B/CourseLab.git';

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cloneCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 text-yellow-400">
              <Star className="size-5 fill-yellow-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-extrabold text-lg text-white">
                  Proyecto Open Source
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#1D72FE]/20 text-blue-300 border border-blue-400/30">
                  <Sparkles className="size-3" /> MIT License
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                CourseLab es libre, gratuito y construido para la comunidad.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Pitch & Call to Action to Star */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3.5">
            <div className="mt-0.5 text-amber-500 flex-shrink-0">
              <Star className="size-5 fill-amber-400" />
            </div>
            <div className="text-xs text-amber-900 leading-relaxed">
              <p className="font-bold text-amber-950 text-sm mb-1">
                ¡Apóyanos con una estrella en GitHub! ⭐
              </p>
              <p>
                Cada <strong>Star</strong> nos ayuda a que más estudiantes, docentes y desarrolladores descubran CourseLab y hagamos de la educación avanzada algo accesible para todos.
              </p>
            </div>
          </div>

          {/* Quick Clone / Get the project */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Terminal className="size-3.5 text-[#1D72FE]" />
                <span>Consíguelo en tu equipo (Clone)</span>
              </label>
              <span className="text-[11px] text-slate-400 font-mono">Git CLI</span>
            </div>

            <div className="relative flex items-center">
              <div className="w-full bg-slate-900 text-slate-200 font-mono text-xs px-4 py-3 rounded-xl border border-slate-700 select-all overflow-x-auto">
                <span className="text-emerald-400 mr-2">$</span>
                {cloneCommand}
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="absolute right-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                title="Copiar comando"
              >
                {copied ? (
                  <>
                    <Check className="size-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5 text-slate-300" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#1D72FE] text-white text-[10px] inline-flex items-center justify-center font-mono">1</span>
                Instalar y Ejecutar
              </div>
              <p className="text-[11px] text-slate-500 font-mono">
                cd CourseLab && npm install && npm run dev
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] inline-flex items-center justify-center font-mono">2</span>
                Dejar tu Star
              </div>
              <p className="text-[11px] text-slate-500">
                Haz clic en el botón ⭐ en la esquina superior derecha del repositorio.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#24292F] hover:bg-black shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
            >
              <Star className="size-4 text-yellow-400 fill-yellow-400 group-hover:rotate-12 transition-transform" />
              <span>Dar Star en GitHub</span>
              <ExternalLink className="size-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span className="flex items-center gap-1">
            <Heart className="size-3 text-red-500 fill-red-500 inline" /> Hecho para estudiantes y profesores
          </span>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1D72FE] hover:underline"
          >
            github.com/MatiasV3B/CourseLab
          </a>
        </div>
      </div>
    </div>
  );
};
