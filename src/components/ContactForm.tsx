import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    captcha: false,
    honeypot: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const rfcEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const validateField = (name: string, value: any) => {
    switch (name) {
      case 'name':
        if (!value.trim() || value.trim().length < 2) {
          return '請輸入您的姓名或團隊名稱 (至少 2 個字元)。';
        }
        return '';
      case 'email':
        if (!rfcEmailRegex.test(value.trim())) {
          return '請輸入有效的電子郵件格式 (例如: client@domain.com)。';
        }
        return '';
      case 'subject':
        if (!value) {
          return '請選擇最符合您委託需求的專案類型。';
        }
        return '';
      case 'message':
        if (value.trim().length < 15) {
          return '請輸入至少 15 個字元的專案描述以利我們評估。';
        }
        return '';
      case 'captcha':
        if (!value) {
          return '請勾選人機驗證與條款複選框以完成發送。';
        }
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));

    if (touched[name]) {
      const error = validateField(name, val);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    // Validate all
    const newErrors: { [key: string]: string } = {};
    let hasError = false;
    (['name', 'email', 'subject', 'message', 'captcha'] as const).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        hasError = true;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
      captcha: true
    });

    if (hasError) {
      setSubmitStatus('error');
      return;
    }

    setSubmitting(true);
    setSubmitStatus('idle');

    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        captcha: false,
        honeypot: ''
      });
      setTouched({});
      setErrors({});
    }, 1200);
  };

  return (
    <div className="p-space-lg md:p-space-xl rounded-xl bg-surface-container-low shadow-2xl relative flex flex-col gap-space-lg backdrop-blur-xl border border-surface-container-highest">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
            Project Commission Dispatch
          </span>
          <span className="font-label-mono text-label-mono text-on-surface-variant">
            STEP 01 OF 01
          </span>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
          Initiate Project Dialogue / 委託諮詢表單
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          請填寫您的專案範疇與預期規格，我們將在一個工作日內提供時程規劃與估算報告。
        </p>
      </div>

      {/* Alert Banner / Toast Notification */}
      {submitStatus === 'success' && (
        <div className="p-space-md rounded-lg flex items-start gap-space-md bg-secondary-container/40 text-on-surface shadow-xl border border-primary-container/30">
          <span className="material-symbols-outlined text-2xl mt-0.5 text-primary-container">
            check_circle
          </span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary">訊息已成功發送！</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              我們會於 24 小時內回覆。感謝您的委託諮詢，專案資料已妥善加密存檔。
            </p>
          </div>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="ml-auto text-on-surface-variant hover:text-on-surface"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-space-md rounded-lg flex items-start gap-space-md bg-error-container text-on-error-container shadow-lg">
          <span className="material-symbols-outlined text-2xl mt-0.5">report_problem</span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm">欄位填寫不完全</span>
            <p className="font-body-sm text-body-sm">請檢查紅框標示項目並確認必填資訊正確無誤。</p>
          </div>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="ml-auto text-on-surface-variant hover:text-on-surface"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-space-md" noValidate>
        {/* Honeypot */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Name */}
        <div className="flex flex-col gap-1 relative">
          <label className="font-label-mono text-label-mono text-on-surface uppercase flex justify-between" htmlFor="client_name">
            <span>
              01. Your Name / 委託人姓名 <span className="text-primary">*</span>
            </span>
            <span className="text-on-surface-variant">REQUIRED</span>
          </label>
          <div className="relative">
            <input
              id="client_name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              placeholder="e.g. Elena Rostova or Studio Nova Inc."
              className={`w-full px-space-md py-space-sm bg-surface-container rounded-lg text-on-surface font-body-md placeholder:text-on-surface-variant/40 focus:outline-none focus:bg-surface-container-high transition-colors shadow-inner border ${
                errors.name ? 'border-error bg-error-container/20' : 'border-transparent'
              }`}
            />
            {touched.name && !errors.name && (
              <span className="material-symbols-outlined absolute right-3 top-3 text-primary-container text-lg">
                check_circle
              </span>
            )}
          </div>
          {errors.name && (
            <span className="font-label-mono text-label-mono text-error flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-xs">error</span> {errors.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1 relative">
          <label className="font-label-mono text-label-mono text-on-surface uppercase flex justify-between" htmlFor="client_email">
            <span>
              02. Email Address / 電子郵件信箱 <span className="text-primary">*</span>
            </span>
            <span className="text-on-surface-variant">RFC-5322 SPEC</span>
          </label>
          <div className="relative">
            <input
              id="client_email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              placeholder="name@organization.com"
              className={`w-full px-space-md py-space-sm bg-surface-container rounded-lg text-on-surface font-body-md placeholder:text-on-surface-variant/40 focus:outline-none focus:bg-surface-container-high transition-colors shadow-inner border ${
                errors.email ? 'border-error bg-error-container/20' : 'border-transparent'
              }`}
            />
            {touched.email && !errors.email && (
              <span className="material-symbols-outlined absolute right-3 top-3 text-primary-container text-lg">
                check_circle
              </span>
            )}
          </div>
          {errors.email && (
            <span className="font-label-mono text-label-mono text-error flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-xs">error</span> {errors.email}
            </span>
          )}
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1 relative">
          <label className="font-label-mono text-label-mono text-on-surface uppercase flex justify-between" htmlFor="client_subject">
            <span>
              03. Subject &amp; Project Domain / 專案類型 <span className="text-primary">*</span>
            </span>
            <span className="text-on-surface-variant">CLASSIFICATION</span>
          </label>
          <div className="relative">
            <select
              id="client_subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={() => handleBlur('subject')}
              className={`w-full px-space-md py-space-sm bg-surface-container rounded-lg text-on-surface font-body-md focus:outline-none focus:bg-surface-container-high transition-colors shadow-inner appearance-none cursor-pointer border ${
                errors.subject ? 'border-error bg-error-container/20' : 'border-transparent'
              }`}
            >
              <option value="" disabled>Select Commission Type / 請選擇專案項目</option>
              <option value="3D Art & CGI Visualization">3D Art & Key Visual Direction (主視覺美術)</option>
              <option value="Commercial 3D Product Renders">Commercial Product Renders & Motion (產品渲染動態)</option>
              <option value="Interactive WebGL & Realtime">Interactive WebGL / Unreal Engine 5 Realtime 互動開發</option>
              <option value="2D Concept Design & Matte Painting">2D Concept Art & Worldbuilding (概念美術設計)</option>
              <option value="Commercial IP Licensing">Commercial IP Licensing & Exhibition (商業展演授權)</option>
              <option value="Other Bespoke Collaboration">Other Bespoke Creative Inquiries (其他合作)</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none">
              expand_more
            </span>
          </div>
          {errors.subject && (
            <span className="font-label-mono text-label-mono text-error flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-xs">error</span> {errors.subject}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 relative">
          <div className="flex justify-between items-center">
            <label className="font-label-mono text-label-mono text-on-surface uppercase" htmlFor="client_message">
              04. Project Scope &amp; Brief / 專案簡介與規格需求 <span className="text-primary">*</span>
            </label>
            <div className="font-label-mono text-label-mono text-on-surface-variant">
              <span className={formData.message.length > 1000 ? 'text-secondary font-bold' : 'text-primary'}>
                {formData.message.length}
              </span> / 1200 CHARS
            </div>
          </div>
          <textarea
            id="client_message"
            name="message"
            rows={5}
            maxLength={1200}
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
            placeholder="Describe your vision, timeline, target deliverables (e.g. 4K renders, WebGL runtime, rigged assets), and reference links..."
            className={`w-full px-space-md py-space-sm bg-surface-container rounded-lg text-on-surface font-body-md placeholder:text-on-surface-variant/40 focus:outline-none focus:bg-surface-container-high transition-colors shadow-inner resize-y border ${
              errors.message ? 'border-error bg-error-container/20' : 'border-transparent'
            }`}
          />
          {errors.message && (
            <span className="font-label-mono text-label-mono text-error flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-xs">error</span> {errors.message}
            </span>
          )}
        </div>

        {/* CAPTCHA / Human verification */}
        <div className="p-space-md rounded-lg bg-surface-container flex items-center justify-between flex-wrap gap-space-sm border border-surface-container-highest">
          <label className="flex items-center gap-space-sm cursor-pointer select-none">
            <input
              type="checkbox"
              name="captcha"
              checked={formData.captcha}
              onChange={handleChange}
              className="w-5 h-5 accent-primary-container rounded bg-surface-container-high cursor-pointer"
            />
            <span className="font-label-mono text-label-mono text-on-surface">
              I am human &amp; agree to Studio NDA terms / 人機驗證
            </span>
          </label>
          <div className="flex items-center gap-space-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-base text-primary">security</span>
            <span className="font-label-caps text-label-caps uppercase">SHA-256 ZERO BOT SHIELD</span>
          </div>
        </div>
        {errors.captcha && (
          <span className="font-label-mono text-label-mono text-error flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">error</span> {errors.captcha}
          </span>
        )}

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row items-center gap-space-md pt-space-xs">
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto px-space-xl py-space-md rounded-lg bg-gradient-to-r from-primary-container to-primary text-on-primary-container font-headline-sm text-headline-sm uppercase tracking-wider flex items-center justify-center gap-space-sm shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {submitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-on-primary-container" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Transmitting Data...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                  send
                </span>
                <span>Transmit Inquiry / 發送專案委託</span>
              </>
            )}
          </button>
          <span className="font-label-mono text-label-mono text-on-surface-variant text-center sm:text-left">
            Typical reply window: <strong className="text-on-surface">≤ 24h</strong>. Direct NDA available upon kickoff.
          </span>
        </div>
      </form>
    </div>
  );
};
