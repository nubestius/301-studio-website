"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  const content = {
    en: {
      title: "Terms and Conditions",
      lastUpdated: "Last updated:",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
        },
        {
          title: "2. Use License for Website Content",
          content:
            "Permission is granted to temporarily download one copy of the materials on 301 Studio's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on 301 Studio's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server.",
        },
        {
          title: "2a. Product Sales Through Envato Market",
          content:
            "Our WordPress plugins, Perfex CRM modules, and scripts are sold exclusively through Envato Market (including CodeCanyon, ThemeForest, and other Envato marketplaces). When you purchase our products through Envato, you are subject to Envato's Terms and Conditions and License Terms. The license terms for each product are specified on the product page on Envato Market. By purchasing our products through Envato, you agree to comply with both Envato's terms and the specific license terms for the product you purchase. We do not sell products directly through this website.",
        },
        {
          title: "2b. Envato License Terms",
          content:
            "All products sold through Envato Market are subject to Envato's Standard License or Extended License terms, as specified on each product page. The Standard License typically allows use in a single end product, while the Extended License may allow use in multiple end products. You must review and comply with the specific license terms for each product you purchase. Unauthorized distribution, resale, or sharing of licensed products is strictly prohibited and may result in legal action.",
        },
        {
          title: "3. Software Warranty Disclaimer",
          content:
            "ALL SOFTWARE PRODUCTS SOLD BY 301 STUDIO THROUGH ENVATO MARKET ARE PROVIDED 'AS IS' AND 'AS AVAILABLE' WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 301 STUDIO EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO: WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, OR SUITABILITY; WARRANTIES THAT THE SOFTWARE WILL MEET YOUR REQUIREMENTS; WARRANTIES THAT THE SOFTWARE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; WARRANTIES REGARDING THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SOFTWARE; AND WARRANTIES REGARDING THE QUALITY, ACCURACY, OR RELIABILITY OF THE SOFTWARE. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM 301 STUDIO OR THROUGH THE SOFTWARE SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS.",
        },
        {
          title: "4. Limitation of Liability and Damages",
          content:
            "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL 301 STUDIO, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (A) YOUR USE OR INABILITY TO USE THE SOFTWARE; (B) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY PERSONAL INFORMATION STORED THEREIN; (C) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SOFTWARE; (D) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH THE SOFTWARE BY ANY THIRD PARTY; (E) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SOFTWARE; AND/OR (F) THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY. IN NO EVENT SHALL 301 STUDIO'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID FOR THE SOFTWARE PRODUCT, OR FIFTY DOLLARS ($50.00 USD), WHICHEVER IS GREATER.",
        },
        {
          title: "5. Security Vulnerabilities and Software Defects",
          content:
            "YOU ACKNOWLEDGE AND AGREE THAT SOFTWARE MAY CONTAIN BUGS, ERRORS, DEFECTS, AND SECURITY VULNERABILITIES. 301 STUDIO DOES NOT WARRANT THAT THE SOFTWARE WILL BE FREE FROM VULNERABILITIES, SECURITY FLAWS, OR DEFECTS. YOU ARE SOLELY RESPONSIBLE FOR: (A) IMPLEMENTING APPROPRIATE SECURITY MEASURES TO PROTECT YOUR SYSTEMS AND DATA; (B) REGULARLY UPDATING THE SOFTWARE TO THE LATEST VERSION; (C) BACKING UP YOUR DATA BEFORE INSTALLING OR UPDATING THE SOFTWARE; (D) TESTING THE SOFTWARE IN A NON-PRODUCTION ENVIRONMENT BEFORE DEPLOYMENT; AND (E) MONITORING AND ADDRESSING ANY SECURITY VULNERABILITIES THAT MAY AFFECT YOUR SYSTEMS. 301 STUDIO SHALL NOT BE LIABLE FOR ANY DAMAGES, LOSSES, OR BREACHES RESULTING FROM SECURITY VULNERABILITIES, SOFTWARE DEFECTS, OR YOUR FAILURE TO IMPLEMENT APPROPRIATE SECURITY MEASURES OR INSTALL UPDATES.",
        },
        {
          title: "6. Software Updates and Modifications",
          content:
            "301 STUDIO RESERVES THE RIGHT TO MODIFY, UPDATE, OR DISCONTINUE THE SOFTWARE AT ANY TIME WITHOUT PRIOR NOTICE. WHILE WE STRIVE TO PROVIDE REGULAR UPDATES AND SECURITY PATCHES, WE DO NOT GUARANTEE THAT UPDATES WILL BE PROVIDED, THAT UPDATES WILL BE PROVIDED ON A SPECIFIC SCHEDULE, OR THAT UPDATES WILL ADDRESS ALL KNOWN ISSUES OR VULNERABILITIES. YOU ARE RESPONSIBLE FOR MONITORING AND INSTALLING UPDATES IN A TIMELY MANNER. 301 STUDIO SHALL NOT BE LIABLE FOR ANY DAMAGES RESULTING FROM YOUR FAILURE TO INSTALL UPDATES OR FROM ISSUES THAT EXIST IN UPDATED VERSIONS OF THE SOFTWARE. WE RESERVE THE RIGHT TO DISCONTINUE SUPPORT FOR OLDER VERSIONS OF THE SOFTWARE.",
        },
        {
          title: "7. Data Loss and Backup Responsibility",
          content:
            "YOU ACKNOWLEDGE AND AGREE THAT THE USE OF SOFTWARE MAY RESULT IN DATA LOSS, CORRUPTION, OR DELETION. 301 STUDIO STRONGLY RECOMMENDS THAT YOU MAINTAIN REGULAR BACKUPS OF ALL DATA BEFORE INSTALLING, UPDATING, OR USING THE SOFTWARE. 301 STUDIO SHALL NOT BE LIABLE FOR ANY LOSS, CORRUPTION, OR DELETION OF DATA, INCLUDING BUT NOT LIMITED TO: DATABASE RECORDS, USER DATA, CONFIGURATION SETTINGS, CUSTOMIZATIONS, OR ANY OTHER INFORMATION STORED IN YOUR SYSTEMS. YOU ARE SOLELY RESPONSIBLE FOR MAINTAINING ADEQUATE BACKUP PROCEDURES AND DATA RECOVERY CAPABILITIES.",
        },
        {
          title: "8. Third-Party Integrations and Compatibility",
          content:
            "THE SOFTWARE MAY INTEGRATE WITH OR DEPEND ON THIRD-PARTY SERVICES, PLUGINS, THEMES, OR SOFTWARE. 301 STUDIO DOES NOT WARRANT THE COMPATIBILITY, AVAILABILITY, OR FUNCTIONALITY OF ANY THIRD-PARTY INTEGRATIONS. CHANGES TO THIRD-PARTY SOFTWARE OR SERVICES MAY AFFECT THE FUNCTIONALITY OF THE SOFTWARE. 301 STUDIO SHALL NOT BE LIABLE FOR ANY ISSUES ARISING FROM: (A) INCOMPATIBILITY WITH THIRD-PARTY SOFTWARE OR SERVICES; (B) CHANGES TO THIRD-PARTY SOFTWARE OR SERVICES; (C) DISCONTINUATION OF THIRD-PARTY SERVICES; OR (D) ANY OTHER ISSUES RELATED TO THIRD-PARTY INTEGRATIONS. YOU ARE RESPONSIBLE FOR ENSURING COMPATIBILITY WITH YOUR EXISTING SYSTEMS AND SOFTWARE.",
        },
        {
          title: "9. Use at Your Own Risk",
          content:
            "YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SOFTWARE IS AT YOUR SOLE RISK. THE SOFTWARE IS PROVIDED FOR USE 'AS IS' WITHOUT ANY GUARANTEES REGARDING PERFORMANCE, SECURITY, RELIABILITY, OR SUITABILITY FOR YOUR SPECIFIC NEEDS. YOU ARE RESPONSIBLE FOR EVALUATING WHETHER THE SOFTWARE IS SUITABLE FOR YOUR INTENDED USE AND FOR IMPLEMENTING APPROPRIATE SAFEGUARDS. 301 STUDIO SHALL NOT BE LIABLE FOR ANY CONSEQUENCES RESULTING FROM YOUR USE OR MISUSE OF THE SOFTWARE.",
        },
        {
          title: "10. No Guarantee of Continuous Availability",
          content:
            "301 STUDIO DOES NOT WARRANT THAT THE SOFTWARE WILL BE AVAILABLE FOR DOWNLOAD, INSTALLATION, OR USE AT ALL TIMES. WE RESERVE THE RIGHT TO TEMPORARILY OR PERMANENTLY DISCONTINUE THE SOFTWARE, REMOVE IT FROM DISTRIBUTION, OR MODIFY IT IN WAYS THAT MAY AFFECT ITS FUNCTIONALITY. 301 STUDIO SHALL NOT BE LIABLE FOR ANY DAMAGES RESULTING FROM THE UNAVAILABILITY OF THE SOFTWARE OR FROM CHANGES MADE TO THE SOFTWARE.",
        },
        {
          title: "11. Indemnification",
          content:
            "YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS 301 STUDIO, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AND SUPPLIERS FROM AND AGAINST ANY AND ALL CLAIMS, DAMAGES, OBLIGATIONS, LOSSES, LIABILITIES, COSTS, OR DEBT, AND EXPENSES (INCLUDING BUT NOT LIMITED TO ATTORNEY'S FEES) ARISING FROM: (A) YOUR USE OR MISUSE OF THE SOFTWARE; (B) YOUR VIOLATION OF THESE TERMS; (C) YOUR VIOLATION OF ANY THIRD-PARTY RIGHT, INCLUDING WITHOUT LIMITATION ANY COPYRIGHT, PROPERTY, OR PRIVACY RIGHT; (D) ANY CLAIM THAT YOUR USE OF THE SOFTWARE CAUSED DAMAGE TO A THIRD PARTY; OR (E) ANY SECURITY BREACH OR DATA LOSS RESULTING FROM YOUR USE OF THE SOFTWARE OR YOUR FAILURE TO IMPLEMENT APPROPRIATE SECURITY MEASURES.",
        },
        {
          title: "12. Website Content Disclaimer",
          content:
            "The materials on 301 Studio's website are provided on an 'as is' basis. 301 Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        },
        {
          title: "13. Accuracy of Materials",
          content:
            "The materials appearing on 301 Studio's website could include technical, typographical, or photographic errors. 301 Studio does not warrant that any of the materials on its website are accurate, complete, or current. 301 Studio may make changes to the materials contained on its website at any time without notice.",
        },
        {
          title: "14. Links",
          content:
            "301 Studio has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by 301 Studio of the site. Use of any such linked website is at the user's own risk.",
        },
        {
          title: "15. Modifications to Terms",
          content:
            "301 Studio may revise these terms of service for its website and software products at any time without notice. By using this website or purchasing our software products, you are agreeing to be bound by the then current version of these terms of service. It is your responsibility to review these terms periodically for changes.",
        },
        {
          title: "16. Governing Law and Jurisdiction",
          content:
            "These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes arising out of or relating to these terms, the software, or your use of the software shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association, or in the courts of competent jurisdiction. You irrevocably submit to the exclusive jurisdiction of such courts or arbitration forums.",
        },
        {
          title: "9. Product Support and Updates",
          content:
            "Support for products purchased through Envato Market is provided in accordance with Envato's support policies. We provide support through the Envato support system and may also provide support via email at hello@301studio.com. Updates to products are typically provided through your Envato account's download section. Support duration and terms are specified on each product page on Envato Market.",
        },
        {
          title: "10. Refunds and Disputes",
          content:
            "Refund requests for products purchased through Envato Market must be processed through Envato's refund system in accordance with Envato's refund policy. We do not process refunds directly. If you have concerns about a product you purchased, please contact Envato support or reach out to us at hello@301studio.com, and we will work with you to resolve any issues.",
        },
        {
          title: "11. Contact Information",
          content:
            "If you have any questions about these Terms and Conditions, our products, or need support, please contact us at hello@301studio.com. For purchase-related inquiries, please contact Envato support through your Envato account.",
        },
      ],
    },
    es: {
      title: "Términos y Condiciones",
      lastUpdated: "Última actualización:",
      sections: [
        {
          title: "1. Aceptación de los Términos",
          content:
            "Al acceder y utilizar este sitio web, acepta y se compromete a cumplir con los términos y disposiciones de este acuerdo. Si no está de acuerdo con lo anterior, por favor no utilice este servicio.",
        },
        {
          title: "2. Licencia de Uso para Contenido del Sitio Web",
          content:
            "Se otorga permiso para descargar temporalmente una copia de los materiales en el sitio web de 301 Studio solo para visualización personal, no comercial y transitoria. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia no puede: modificar o copiar los materiales; usar los materiales para cualquier propósito comercial o para cualquier exhibición pública (comercial o no comercial); intentar descompilar o hacer ingeniería inversa de cualquier software contenido en el sitio web de 301 Studio; eliminar cualquier notación de derechos de autor u otra propiedad de los materiales; o transferir los materiales a otra persona o 'reflejar' los materiales en cualquier otro servidor.",
        },
        {
          title: "2a. Ventas de Productos a Través de Envato Market",
          content:
            "Nuestros plugins de WordPress, módulos de Perfex CRM y scripts se venden exclusivamente a través de Envato Market (incluyendo CodeCanyon, ThemeForest y otros mercados de Envato). Cuando compra nuestros productos a través de Envato, está sujeto a los Términos y Condiciones y Términos de Licencia de Envato. Los términos de licencia para cada producto se especifican en la página del producto en Envato Market. Al comprar nuestros productos a través de Envato, acepta cumplir tanto con los términos de Envato como con los términos de licencia específicos del producto que compra. No vendemos productos directamente a través de este sitio web.",
        },
        {
          title: "2b. Términos de Licencia de Envato",
          content:
            "Todos los productos vendidos a través de Envato Market están sujetos a los términos de Licencia Estándar o Licencia Extendida de Envato, según se especifica en cada página de producto. La Licencia Estándar típicamente permite el uso en un solo producto final, mientras que la Licencia Extendida puede permitir el uso en múltiples productos finales. Debe revisar y cumplir con los términos de licencia específicos para cada producto que compre. La distribución no autorizada, reventa o compartición de productos con licencia está estrictamente prohibida y puede resultar en acción legal.",
        },
        {
          title: "3. Descargo de Garantía de Software",
          content:
            "TODOS LOS PRODUCTOS DE SOFTWARE VENDIDOS POR 301 STUDIO A TRAVÉS DE ENVATO MARKET SE PROPORCIONAN 'TAL CUAL' Y 'SEGÚN DISPONIBILIDAD' SIN GARANTÍAS DE NINGÚN TIPO, YA SEA EXPRESA O IMPLÍCITA. 301 STUDIO RENUNCIA EXPRESAMENTE A TODAS LAS GARANTÍAS, INCLUYENDO PERO NO LIMITADO A: GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR, NO INFRACCIÓN, PRECISIÓN, CONFIABILIDAD O ADECUACIÓN; GARANTÍAS DE QUE EL SOFTWARE CUMPLIRÁ CON SUS REQUISITOS; GARANTÍAS DE QUE EL SOFTWARE SERÁ ININTERRUMPIDO, OPORTUNO, SEGURO O LIBRE DE ERRORES; GARANTÍAS RESPECTO A LOS RESULTADOS QUE PUEDAN OBTENERSE DEL USO DEL SOFTWARE; Y GARANTÍAS RESPECTO A LA CALIDAD, PRECISIÓN O CONFIABILIDAD DEL SOFTWARE. NINGÚN CONSEJO O INFORMACIÓN, YA SEA ORAL O ESCRITA, OBTENIDA POR USTED DE 301 STUDIO O A TRAVÉS DEL SOFTWARE CREARÁ NINGUNA GARANTÍA NO EXPRESAMENTE ESTABLECIDA EN ESTOS TÉRMINOS.",
        },
        {
          title: "4. Limitación de Responsabilidad y Daños",
          content:
            "EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, EN NINGÚN CASO 301 STUDIO, SUS AFILIADOS, DIRECTORES, OFICIALES, EMPLEADOS, AGENTES O PROVEEDORES SERÁN RESPONSABLES DE CUALQUIER DAÑO INDIRECTO, INCIDENTAL, ESPECIAL, CONSECUENCIAL O PUNITIVO, O CUALQUIER PÉRDIDA DE GANANCIAS O INGRESOS, YA SEA INCURRIDA DIRECTA O INDIRECTAMENTE, O CUALQUIER PÉRDIDA DE DATOS, USO, BUENA VOLUNTAD U OTRAS PÉRDIDAS INTANGIBLES, RESULTANTES DE: (A) SU USO O INCAPACIDAD DE USAR EL SOFTWARE; (B) CUALQUIER ACCESO NO AUTORIZADO O USO DE NUESTROS SERVIDORES Y/O CUALQUIER INFORMACIÓN PERSONAL ALMACENADA EN ELLOS; (C) CUALQUIER INTERRUPCIÓN O CESACIÓN DE TRANSMISIÓN HACIA O DESDE EL SOFTWARE; (D) CUALQUIER ERROR, VIRUS, CABALLOS DE TROYA O SIMILARES, QUE PUEDAN SER TRANSMITIDOS HACIA O A TRAVÉS DEL SOFTWARE POR CUALQUIER TERCERO; (E) CUALQUIER ERROR U OMISIÓN EN CUALQUIER CONTENIDO O POR CUALQUIER PÉRDIDA O DAÑO DE CUALQUIER TIPO INCURRIDO COMO RESULTADO DE SU USO DE CUALQUIER CONTENIDO PUBLICADO, ENVIADO POR CORREO ELECTRÓNICO, TRANSMITIDO O PUESTO A DISPOSICIÓN A TRAVÉS DEL SOFTWARE; Y/O (F) LA CONDUCTA DIFAMATORIA, OFENSIVA O ILEGAL DE CUALQUIER TERCERO. EN NINGÚN CASO LA RESPONSABILIDAD TOTAL DE 301 STUDIO HACIA USTED POR TODOS LOS DAÑOS EXCEDERÁ EL MONTO QUE PAGÓ POR EL PRODUCTO DE SOFTWARE, O CINCUENTA DÓLARES ($50.00 USD), LO QUE SEA MAYOR.",
        },
        {
          title: "5. Vulnerabilidades de Seguridad y Defectos de Software",
          content:
            "USTED RECONOCE Y ACEPTA QUE EL SOFTWARE PUEDE CONTENER ERRORES, DEFECTOS Y VULNERABILIDADES DE SEGURIDAD. 301 STUDIO NO GARANTIZA QUE EL SOFTWARE ESTÉ LIBRE DE VULNERABILIDADES, FALLAS DE SEGURIDAD O DEFECTOS. USTED ES EL ÚNICO RESPONSABLE DE: (A) IMPLEMENTAR MEDIDAS DE SEGURIDAD APROPIADAS PARA PROTEGER SUS SISTEMAS Y DATOS; (B) ACTUALIZAR REGULARMENTE EL SOFTWARE A LA ÚLTIMA VERSIÓN; (C) HACER COPIAS DE SEGURIDAD DE SUS DATOS ANTES DE INSTALAR O ACTUALIZAR EL SOFTWARE; (D) PROBAR EL SOFTWARE EN UN ENTORNO NO PRODUCTIVO ANTES DEL DESPLIEGUE; Y (E) MONITOREAR Y ABORDAR CUALQUIER VULNERABILIDAD DE SEGURIDAD QUE PUEDA AFECTAR SUS SISTEMAS. 301 STUDIO NO SERÁ RESPONSABLE DE CUALQUIER DAÑO, PÉRDIDA O VIOLACIÓN RESULTANTE DE VULNERABILIDADES DE SEGURIDAD, DEFECTOS DE SOFTWARE O SU FALTA DE IMPLEMENTAR MEDIDAS DE SEGURIDAD APROPIADAS O INSTALAR ACTUALIZACIONES.",
        },
        {
          title: "6. Actualizaciones y Modificaciones del Software",
          content:
            "301 STUDIO SE RESERVA EL DERECHO DE MODIFICAR, ACTUALIZAR O DISCONTINUAR EL SOFTWARE EN CUALQUIER MOMENTO SIN AVISO PREVIO. AUNQUE NOS ESFORZAMOS POR PROPORCIONAR ACTUALIZACIONES REGULARES Y PARCHES DE SEGURIDAD, NO GARANTIZAMOS QUE SE PROPORCIONARÁN ACTUALIZACIONES, QUE SE PROPORCIONARÁN ACTUALIZACIONES EN UN HORARIO ESPECÍFICO, O QUE LAS ACTUALIZACIONES ABORDARÁN TODOS LOS PROBLEMAS O VULNERABILIDADES CONOCIDOS. USTED ES RESPONSABLE DE MONITOREAR E INSTALAR ACTUALIZACIONES DE MANERA OPORTUNA. 301 STUDIO NO SERÁ RESPONSABLE DE CUALQUIER DAÑO RESULTANTE DE SU FALTA DE INSTALAR ACTUALIZACIONES O DE PROBLEMAS QUE EXISTAN EN VERSIONES ACTUALIZADAS DEL SOFTWARE. NOS RESERVAMOS EL DERECHO DE DISCONTINUAR EL SOPORTE PARA VERSIONES ANTIGUAS DEL SOFTWARE.",
        },
        {
          title: "7. Pérdida de Datos y Responsabilidad de Copias de Seguridad",
          content:
            "USTED RECONOCE Y ACEPTA QUE EL USO DEL SOFTWARE PUEDE RESULTAR EN PÉRDIDA, CORRUPCIÓN O ELIMINACIÓN DE DATOS. 301 STUDIO RECOMIENDA ENFÁTICAMENTE QUE MANTENGA COPIAS DE SEGURIDAD REGULARES DE TODOS LOS DATOS ANTES DE INSTALAR, ACTUALIZAR O USAR EL SOFTWARE. 301 STUDIO NO SERÁ RESPONSABLE DE CUALQUIER PÉRDIDA, CORRUPCIÓN O ELIMINACIÓN DE DATOS, INCLUYENDO PERO NO LIMITADO A: REGISTROS DE BASE DE DATOS, DATOS DE USUARIO, CONFIGURACIONES, PERSONALIZACIONES O CUALQUIER OTRA INFORMACIÓN ALMACENADA EN SUS SISTEMAS. USTED ES EL ÚNICO RESPONSABLE DE MANTENER PROCEDIMIENTOS ADECUADOS DE COPIA DE SEGURIDAD Y CAPACIDADES DE RECUPERACIÓN DE DATOS.",
        },
        {
          title: "8. Integraciones de Terceros y Compatibilidad",
          content:
            "EL SOFTWARE PUEDE INTEGRARSE CON O DEPENDER DE SERVICIOS, PLUGINS, TEMAS O SOFTWARE DE TERCEROS. 301 STUDIO NO GARANTIZA LA COMPATIBILIDAD, DISPONIBILIDAD O FUNCIONALIDAD DE CUALQUIER INTEGRACIÓN DE TERCEROS. LOS CAMBIOS EN EL SOFTWARE O SERVICIOS DE TERCEROS PUEDEN AFECTAR LA FUNCIONALIDAD DEL SOFTWARE. 301 STUDIO NO SERÁ RESPONSABLE DE CUALQUIER PROBLEMA QUE SURJA DE: (A) INCOMPATIBILIDAD CON SOFTWARE O SERVICIOS DE TERCEROS; (B) CAMBIOS EN EL SOFTWARE O SERVICIOS DE TERCEROS; (C) DISCONTINUACIÓN DE SERVICIOS DE TERCEROS; O (D) CUALQUIER OTRO PROBLEMA RELACIONADO CON INTEGRACIONES DE TERCEROS. USTED ES RESPONSABLE DE ASEGURAR LA COMPATIBILIDAD CON SUS SISTEMAS Y SOFTWARE EXISTENTES.",
        },
        {
          title: "9. Uso Bajo Su Propio Riesgo",
          content:
            "USTED RECONOCE Y ACEPTA EXPRESAMENTE QUE SU USO DEL SOFTWARE ES BAJO SU PROPIO RIESGO. EL SOFTWARE SE PROPORCIONA PARA USO 'TAL CUAL' SIN NINGUNA GARANTÍA RESPECTO AL RENDIMIENTO, SEGURIDAD, CONFIABILIDAD O IDONEIDAD PARA SUS NECESIDADES ESPECÍFICAS. USTED ES RESPONSABLE DE EVALUAR SI EL SOFTWARE ES ADECUADO PARA SU USO PREVISTO Y DE IMPLEMENTAR SALVAGUARDAS APROPIADAS. 301 STUDIO NO SERÁ RESPONSABLE DE CUALQUIER CONSECUENCIA RESULTANTE DE SU USO O MAL USO DEL SOFTWARE.",
        },
        {
          title: "10. Sin Garantía de Disponibilidad Continua",
          content:
            "301 STUDIO NO GARANTIZA QUE EL SOFTWARE ESTÉ DISPONIBLE PARA DESCARGAR, INSTALAR O USAR EN TODO MOMENTO. NOS RESERVAMOS EL DERECHO DE DISCONTINUAR TEMPORAL O PERMANENTEMENTE EL SOFTWARE, REMOVERLO DE LA DISTRIBUCIÓN O MODIFICARLO DE MANERAS QUE PUEDAN AFECTAR SU FUNCIONALIDAD. 301 STUDIO NO SERÁ RESPONSABLE DE CUALQUIER DAÑO RESULTANTE DE LA NO DISPONIBILIDAD DEL SOFTWARE O DE CAMBIOS REALIZADOS AL SOFTWARE.",
        },
        {
          title: "11. Indemnización",
          content:
            "USTED ACEPTA INDEMNIZAR, DEFENDER Y MANTENER INDEMNE A 301 STUDIO, SUS AFILIADOS, DIRECTORES, OFICIALES, EMPLEADOS, AGENTES Y PROVEEDORES DE Y CONTRA TODAS Y CADA UNA DE LAS RECLAMACIONES, DAÑOS, OBLIGACIONES, PÉRDIDAS, RESPONSABILIDADES, COSTOS O DEUDAS Y GASTOS (INCLUYENDO PERO NO LIMITADO A HONORARIOS DE ABOGADOS) QUE SURJAN DE: (A) SU USO O MAL USO DEL SOFTWARE; (B) SU VIOLACIÓN DE ESTOS TÉRMINOS; (C) SU VIOLACIÓN DE CUALQUIER DERECHO DE TERCEROS, INCLUYENDO SIN LIMITACIÓN CUALQUIER DERECHO DE AUTOR, PROPIEDAD O PRIVACIDAD; (D) CUALQUIER RECLAMACIÓN DE QUE SU USO DEL SOFTWARE CAUSÓ DAÑO A UN TERCERO; O (E) CUALQUIER VIOLACIÓN DE SEGURIDAD O PÉRDIDA DE DATOS RESULTANTE DE SU USO DEL SOFTWARE O SU FALTA DE IMPLEMENTAR MEDIDAS DE SEGURIDAD APROPIADAS.",
        },
        {
          title: "12. Descargo de Responsabilidad del Contenido del Sitio Web",
          content:
            "Los materiales en el sitio web de 301 Studio se proporcionan 'tal cual'. 301 Studio no otorga garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluyendo sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.",
        },
        {
          title: "13. Precisión de los Materiales",
          content:
            "Los materiales que aparecen en el sitio web de 301 Studio podrían incluir errores técnicos, tipográficos o fotográficos. 301 Studio no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual. 301 Studio puede hacer cambios a los materiales contenidos en su sitio web en cualquier momento sin previo aviso.",
        },
        {
          title: "5. Precisión de los Materiales",
          content:
            "Los materiales que aparecen en el sitio web de 301 Studio podrían incluir errores técnicos, tipográficos o fotográficos. 301 Studio no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual. 301 Studio puede hacer cambios a los materiales contenidos en su sitio web en cualquier momento sin previo aviso.",
        },
        {
          title: "14. Enlaces",
          content:
            "301 Studio no ha revisado todos los sitios vinculados a su sitio web y no es responsable del contenido de ningún sitio vinculado. La inclusión de cualquier enlace no implica respaldo por parte de 301 Studio del sitio. El uso de cualquier sitio web vinculado es bajo su propio riesgo.",
        },
        {
          title: "15. Modificaciones a los Términos",
          content:
            "301 Studio puede revisar estos términos de servicio para su sitio web y productos de software en cualquier momento sin previo aviso. Al usar este sitio web o comprar nuestros productos de software, acepta estar sujeto a la versión actual de estos términos de servicio. Es su responsabilidad revisar estos términos periódicamente para cambios.",
        },
        {
          title: "16. Ley Aplicable y Jurisdicción",
          content:
            "Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes aplicables. Cualquier disputa que surja de o se relacione con estos términos, el software o su uso del software se resolverá mediante arbitraje vinculante de acuerdo con las reglas de la asociación de arbitraje aplicable, o en los tribunales de jurisdicción competente. Usted se somete irrevocablemente a la jurisdicción exclusiva de dichos tribunales o foros de arbitraje.",
        },
        {
          title: "9. Soporte de Productos y Actualizaciones",
          content:
            "El soporte para productos comprados a través de Envato Market se proporciona de acuerdo con las políticas de soporte de Envato. Proporcionamos soporte a través del sistema de soporte de Envato y también podemos proporcionar soporte por correo electrónico en hello@301studio.com. Las actualizaciones de productos generalmente se proporcionan a través de la sección de descarga de su cuenta de Envato. La duración y los términos del soporte se especifican en cada página de producto en Envato Market.",
        },
        {
          title: "10. Reembolsos y Disputas",
          content:
            "Las solicitudes de reembolso para productos comprados a través de Envato Market deben procesarse a través del sistema de reembolso de Envato de acuerdo con la política de reembolso de Envato. No procesamos reembolsos directamente. Si tiene inquietudes sobre un producto que compró, por favor contacte al soporte de Envato o comuníquese con nosotros en hello@301studio.com, y trabajaremos con usted para resolver cualquier problema.",
        },
        {
          title: "11. Información de Contacto",
          content:
            "Si tiene alguna pregunta sobre estos Términos y Condiciones, nuestros productos, o necesita soporte, por favor contáctenos en hello@301studio.com. Para consultas relacionadas con compras, por favor contacte al soporte de Envato a través de su cuenta de Envato.",
        },
      ],
    },
  }

  const t = content[language]
  const currentDate = new Date().toLocaleDateString(language === "en" ? "en-US" : "es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.title}</h1>
            <p className="text-muted-foreground">
              {t.lastUpdated} {currentDate}
            </p>
          </div>

          <Card>
            <CardContent className="pt-8 pb-8">
              <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                {t.sections.map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer language={language} />
    </div>
  )
}
