// pages/datenschutz.js
import styles from './Privacy.module.scss';

export default function Datenschutz() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Datenschutz</h1>
            <h4>KESSLER-Boote & Meer</h4>
            <p>Verantwortlich für den Inhalt dieser Seite: Roman Kessler</p>
            <p>Roman Kessler | DE-78345, Gewerbestraße 20, Moos</p>
            <p>Rechtsform Einzelunternehmen | Steuer Nr.:</p>
            <p>Mobil: +41 76 400 67 17 | info@kessler-boote.com</p>
            <p>In den nachfolgenden Datenschutzbestimmungen wird die Vorgehensweise von KESSLER-Boote & Meer bezüglich
                der von Nutzern erfassten Daten, die auf diese Seiten von zugreifen oder KESSLER-Boote & Meer auf andere
                Weise personenbezogene Daten zur Verfügung stellen dargestellt.</p>

            <h3 className={styles.sectionTitle}>Unternehmenstransaktion</h3>
            <p>Wir behalten uns das Recht vor Daten im Fall einer Unternehmenstransaktion (z. B. beim Verkauf
                wesentlicher Unternehmensteile, bei einer Fusion, o.Ä.) weiter zu geben. Falls ein oben genannter Fall
                eintritt, übernimmt der Erwerber oder das entsprechende Unternehmen die in dieser Datenschutzerklärung
                dargelegten Rechte und Pflichten.</p>

            <h3 className={styles.sectionTitle}>SSL-/TLS-Verschlüsselung</h3>
            <p>Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie
                zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-/TLS-Verschlüsselung.
                Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf
                „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
            <p>Wenn die SSL bzw. TLS Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
                von Dritten mitgelesen werden.</p>

            <h3 className={styles.sectionTitle}>Welche Art von Informationen sammeln wir?</h3>
            <p>Wir erfassen zwei Arten von Daten und Informationen von Benutzern.</p>
            <p>Nicht personenbezogene Daten:</p>
            <p>Wir erhalten, sammeln und speichern alle Informationen, die Sie auf unserer Website eingeben oder uns auf
                anderer Weise bereitstellen. Darüber hinaus erfassen wir die IP-Adresse (Internet Protocol), welche
                verwendet wurde, um Ihren Computer mit dem Internet zu verbinden; Anmeldung; E-Mail-Adresse; Passwort;
                Computer- und Verbindungsinformationen. Wir verwenden möglicherweise Software-Tools, um
                Sitzungsinformationen zu messen und zu sammeln, einschließlich der Dauer bis zum Aufbau einer Website
                (Page Response Time), die Dauer, die sich Besucher auf bestimmten Seiten aufhalten,
                Seiteninteraktionsinformationen und Methoden, die zum Abrufen der Seite verwendet werden.</p>
            <p>Personenbezogene Daten:</p>
            <p>Wir sammeln zudem personenbezogene, identifizierbare Informationen (einschließlich Name, E-Mail,
                Passwort, Kommunikation), Kommentare, Feedback und Empfehlungen.</p>

            <h3 className={styles.sectionTitle}>Warum sammeln wir diese Informationen?</h3>
            <p>Wir sammeln diese nicht-personenbezogenen und personenbezogenen Daten für folgende Zwecke:</p>
            <ul>
                <li>Um die Dienste bereitzustellen und durchzuführen;</li>
                <li>Um unseren Nutzern laufenden Kundenservice und technischen Support zu bieten;</li>
                <li>Um unsere Besucher und Nutzer mit allgemeinen oder personalisierten, auf den Dienst bezogenen
                    Hinweisen und Werbebotschaften zu kontaktieren;
                </li>
                <li>Um aggregierte statistische Daten und andere aggregierte und / oder abgeleitete
                    nicht-personenbezogene Informationen zu erstellen, die wir oder unsere Geschäftspartner zur
                    Bereitstellung und Verbesserung unserer Dienste verwenden können;
                </li>
                <li>Um geltende Gesetze und Vorschriften einzuhalten.</li>
            </ul>

            <h3 className={styles.sectionTitle}>Wie sammeln wir diese Informationen?</h3>
            <p>Wenn Sie eine Transaktion auf unserer Website durchführen, erfassen wir die personenbezogenen Daten, die
                Sie uns mitteilen, also Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen werden diese bei uns gespeichert. Diese
                Daten geben wir nicht ohne Ihre Einwilligung weiter. Ihre personenbezogene Daten werden nur aus den oben
                genannten Gründen verwendet.</p>

            <h3 className={styles.sectionTitle}>Wie gehen wir mit Ihren personenbezogenen Daten um und wo werden diese
                gespeichert?</h3>
            <p>Wir speichern Ihre personenbezogenen Daten so lange, wie es für die Bereitstellung unserer Services, die
                Einhaltung rechtlicher Verpflichtungen sowie die Beilegung von Streitigkeiten und die Durchsetzung
                unserer Richtlinien erforderlich ist. Die Aufbewahrungsfristen richten sich nach der Art der erfassten
                Daten und dem Zweck, für den diese Daten erfasst wurden, wobei sowohl die fallspezifischen Gegebenheiten
                als auch die Notwendigkeit berücksichtigt werden, veraltete, nicht genutzte Informationen baldmöglichst
                zu löschen. Datensätze mit personenbezogenen Daten von Kunden, Dokumente über die Kontoeinrichtung,
                Mitteilungen und andere Daten speichern wir gemäß geltender Gesetze und Vorschriften. Wir können
                jederzeit und in unserem alleinigen Ermessen unvollständige oder unrichtige Daten korrigieren,
                vervollständigen oder entfernen.</p>
            <p>Zusätzlich zu den in diesen Datenschutzbestimmungen aufgeführten Zwecken können wir personenbezogene
                Daten aus folgenden Gründen an unsere vertrauenswürdigen externen Anbieter weiterleiten, die ihren Sitz
                in unterschiedlichen Rechtsprechungen auf der ganzen Welt haben: </p>
            <ul>
                <ol>Hosten und Betreiben unserer Webseite</ol>
                <ol>Bereitstellen unserer Services, einschließlich der personalisierten Anzeige unserer Webseite</ol>
                <ol>Speichern und Verarbeiten solcher Daten in unserem Namen</ol>
                <ol>Schalten von Anzeigen sowie die Möglichkeit, den Erfolg unserer Werbekampagnen zu beurteilen,
                    Retargeting von Benutzern
                </ol>
                <ol>Bereitstellen von Marketingangeboten und Werbematerialien in Zusammenhang mit unserer Webseite und
                    unseren Services
                </ol>
                <ol>Durchführen von Studien, technischen Diagnosen oder Analysen</ol>
            </ul>
            <p>Wir können Daten auch offenlegen, wenn wir im guten Glauben sind, dies ist hilfreich oder angemessen, um:
                (i) geltenden Gesetzen, Vorschriften, Gerichtsverfahren oder behördlichen Anfragen zu entsprechen; (ii)
                unsere Richtlinien (einschließlich unserer Vereinbarung) durchzusetzen und ggf. diesbezügliche mögliche
                Verletzungen zu untersuchen; (iii) illegale Aktivitäten oder anderes Fehlverhalten, Betrugsverdacht oder
                Sicherheitsprobleme zu untersuchen, zu erkennen, zu verhindern oder Maßnahmen dagegen zu ergreifen; (iv)
                eigene Rechtsansprüche geltend zu machen oder durchzusetzen bzw. uns gegen die Ansprüche anderer zu
                verteidigen; (v) die Rechte, das Eigentum oder unsere Sicherheit, die Sicherheit unserer Benutzer, Ihre
                Sicherheit oder die Sicherheit von Dritten zu schützen; oder um (vi) mit Strafverfolgungsbehörden
                zusammenzuarbeiten und/oder geistiges Eigentum oder andere Rechtsansprüche zu schützen.</p>


            <h3 className={styles.sectionTitle}>Wie und auf welche Weise kommunizieren wir mit Ihnen?</h3>
            <p>Wir setzten uns möglicherweise mit Ihnen in Verbindung, um Sie bezüglich Ihres Kontos zu benachrichtigen,
                Probleme mit Ihrem Konto zu beheben, eine Streitigkeit beizulegen, geschuldete Gebühren zu sammeln, Ihre
                Meinung durch Umfragen oder Fragebögen zu äußern, um Updates über unser Unternehmen zu senden oder wenn
                es notwendig ist um Sie zu kontaktieren, um unsere Benutzervereinbarung, geltende nationale Gesetze und
                jegliche Vereinbarung, die wir mit Ihnen getroffen haben, durchzusetzen. Zu diesen Zwecken können wir
                Sie per E-Mail, Telefon, SMS oder Post kontaktieren.</p>

            <h3 className={styles.sectionTitle}>Newsletter und Marketing</h3>
            <p>Wir können Ihre personenbezogenen Daten wie Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer usw.
                selbst verwenden oder an einen externen Untervertragsnehmer weiterleiten, um Ihnen Werbematerialien
                bezüglich unserer Services bereitzustellen, die Sie möglicherweise interessieren. </p>
            <p>Wir respektieren Ihr Recht auf Privatsphäre. Daher erhalten Sie in diesen Marketingmaterialien stets die
                Möglichkeit, sich von weiteren Zusendungen abzumelden. Wenn Sie sich abmelden, wird Ihre E-Mail-Adresse
                oder Telefonnummer aus unseren Marketing-Verteilerlisten entfernt. </p>
            <p>Beachten Sie, dass wir Ihnen auch nach einer Abmeldung vom Erhalt unserer Marketing-E-Mails weiterhin
                E-Mails mit wichtigen Informationen senden, die keine Abmeldeoption enthalten. Dazu gehören
                Wartungsmeldungen oder administrative Benachrichtigungen.</p>


            <h3 className={styles.sectionTitle}>Welche Cookies verwenden wir?</h3>
            <p>Diese Website verwendet Cookies, um sie von anderen Nutzern unterscheiden zu können. Cookies ermöglichen
                es uns, insbesondere Nutzungshäufigkeit und Nutzeranzahl der Seiten zu ermitteln, Verhaltensweisen der
                Seitennutzung zu analysieren, aber auch unser Angebot zu optimieren und somit kundenfreundlicher zu
                gestalten.</p>
            <p>Cookies sind kleine Zahlen- oder Textdateien, die es möglich machen, auf dem Endgerät des Nutzers
                spezifische, auf den Nutzer bezogene Informationen zu speichern, während er die Website nutzt. Sie
                können aber auch über das Ende einer Browser-Sitzung hinaus gespeichert und bei einem erneuten
                Seitenbesuch wieder aufgerufen werden.</p>


            <h3 className={styles.sectionTitle}>Auf dieser Website werden folgende Arten von Cookies verwendet:</h3>
            <p>1. „Session-Cookies“ werden nur vorübergehend während einer Browsersitzung verwendet, um eine normale
                Systemnutzung zu ermöglichen. Diese Cookies werden von Ihrem Gerät gelöscht, sobald der Browser
                geschlossen wird. </p>
            <p>2. „Persistente Cookies“ werden nur von der Webseite gelesen, auf Ihrem Computer für einen festgelegten
                Zeitraum gespeichert und nicht gelöscht, wenn der Browser geschlossen wird. Solche Cookies werden
                verwendet, damit wir Sie bei einer Rückkehr auf unsere Website wiedererkennen. Damit können wir
                beispielsweise Ihre Einstellungen für die nächste Anmeldung speichern und wieder abbilden.</p>
            <p>Cookies enthalten keine Daten, anhand derer Sie identifiziert werden können. Personenbezogene Daten, die
                wir von Ihnen speichern, werden möglicherweise von uns mit den in Cookies gespeicherten und von Cookies
                abgerufenen Daten verknüpft. </p>
            <p>Wenn Sie das nicht wünschen, sollten Sie Ihren Internetbrowser so einstellen, dass er die Annahme von
                Cookies verweigert oder deren Speicherung mittels deren Abschaltung in den Browsereinstellungen
                erreichen. Beachten Sie, dass durch das Deaktivieren von Cookies einige Funktionen unserer Webseite
                möglicherweise nicht mehr ordnungsgemäss funktionieren und Ihre Online-Erfahrung dadurch möglicherweise
                eingeschränkt wird.</p>
            <p>Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann
                für die EU auf der Seite http://www.youronlinechoices.com erklärt werden.</p>

            <h3 className={styles.sectionTitle}>Welche anderen „Tools“ verwenden wir?</h3>
            <p>Wir verwenden auch das Tool „Google Analytics“, um Daten über Ihre Nutzung der Webseite zu erfassen.
                Google Analytics erfasst beispielsweise, wie häufig die Webseite aufgerufen wird, welche Seiten bei
                einem Besuch aufgerufen werden usw. Wir verwenden die Google Analytics-Daten nur zur Verbesserung
                unserer Webseite und Services. Google Analytics erfasst die Ihnen am Tag Ihres Besuchs der Webseite
                zugewiesene IP-Adresse und nicht Ihren Namen oder andere identifizierbare Daten. Wir führen die
                erfassten Google Analytics-Daten nicht mit personenbezogenen Daten zusammen. Die Möglichkeiten von
                Google, die von Google Analytics erfassten Daten über Ihre Besuche auf dieser Webseite zu verwenden und
                freizugeben, unterliegen den Nutzungsbedingungen von Google Analytics und der Datenschutzerklärung von
                Google.</p>
            <p>Wir weisen Sie darauf hin, dass auf dieser Website Google Analytics um den Code ‚_anonymizeIp();‘
                erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen zu gewährleisten. Dadurch werden
                IP-Adressen gekürzt weiterverarbeitet, eine Personenbeziehbarkeit kann damit ausgeschlossen werden.</p>

            <h3 className={styles.sectionTitle}>Haftung für Links</h3>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

            <h3 className={styles.sectionTitle}>Erfassung von Daten durch Dritte</h3>
            <p>In dieser Richtlinie werden nur die Nutzung und Offenlegung von Daten, die wir von Ihnen erfassen,
                behandelt. Wenn Sie Daten auf anderen Webseiten veröffentlichen oder Dritten im Internet offenlegen,
                gelten möglicherweise andere Bestimmungen. Lesen Sie sich daher die allgemeinen Geschäftsbedingungen und
                Datenschutzbestimmungen immer sorgfältig durch, wenn Sie Daten offenlegen. </p>
            <p>Diese Datenschutzbestimmungen beziehen sich nicht auf Geschäftspraktiken von Unternehmen, die sich nicht
                in unserem Besitz befinden bzw. nicht unter unserer Kontrolle stehen, oder auf andere Personen als
                unsere Angestellten und Mitarbeiter, einschließlich Dritter, denen wir diese Daten wie in diesen
                Datenschutzbestimmungen beschrieben offenlegen.</p>

            <h3 className={styles.sectionTitle}>Übermittlung von Daten ausserhalb des Europäischen Wirtschaftsraums </h3>
            <p>Beachten Sie, dass einige Empfänger ihren Sitz möglicherweise nicht im Europäischen Wirtschaftsraum haben. Ist dies der Fall, werden wir Ihre Daten nur in von der Europäischen Kommission genehmigte Länder mit angemessenem Datenschutzniveau übermitteln oder durch eine rechtliche Vereinbarung ein angemessenes Datenschutzniveau sicherstellen.</p>
            <h4>Benutzerrechte</h4>
            <p>Wenn Sie nicht möchten, dass wir Ihre Daten weiter verarbeiten, kontaktieren Sie uns bitte unter info@kessler-boote.com oder senden Sie uns einen Brief an: KESSLER-Boote & Meer  | Roman Kessler | Gewerbestraße 6/1 | D-78244 Gottmadingen</p>
            <h4>Aktualisierungen an der Datenschutzerklärung</h4>
            <p>Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit und ohne Vorankündigung zu ändern, überprüfen Sie sie daher regelmäßig. Somit wissen Sie, welche Informationen wir erfassen, wie wir sie verwenden und unter welchen Umständen wir diese gegebenenfalls verwenden und / oder veröffentlichen. Änderungen und Klarstellungen werden unmittelbar nach ihrer Veröffentlichung auf dieser Website wirksam. Sie finden das Datum der aktuellen Version unter „Zuletzt geändert am“. Ihre fortgesetzte Nutzung der Plattform nach der Bekanntmachung solcher Änderungen auf unserer Webseite stellt Ihre Zustimmung zu solchen Änderungen an den Datenschutzbestimmungen dar und gilt als Ihr Einverständnis der Bindung an die geänderten Bestimmungen. </p>
            <h4>Fragen und Kontakt: So erreichen Sie uns</h4>
            <p>Wenn Sie persönliche Daten, die wir über Sie haben, einsehen, korrigieren, ändern oder löschen möchten, können Sie uns unter info@kessler-boote.com kontaktieren oder uns einen Brief senden an: KESSLER-Boote & Meer  | Roman Kessler | Gewerbestraße 6/1 | D-78244 Gottmadingen</p>
        </div>
    );
}
