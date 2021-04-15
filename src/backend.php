<?php
require_once __DIR__ . "/vendor/autoload.php";
function myecho($text)
{
    echo json_encode($text);
}

try {
    $pdo = new PDO("mysql:host=localhost;dbname=projekt-praksa", "admin", "admin");
} catch (PDOException $exception) {
    die("Connection failed: " . $exception->getMessage());
}

$nazivTvrtke = $_POST['nazivTvrtke'];
$adresa = $_POST['adresa'];
$maticniBroj = $_POST['maticniBroj'];
$oib = $_POST['OIB'];
$telefon = $_POST['telefon'];
$nazivTvrtkeKlijenta = $_POST['nazivTvrtkeKlijenta'];
$adresaTvrtkeKlijenta = $_POST['adresaTvrtkeKlijenta'];
$maticniBrojKlijenta = $_POST['maticniBrojKlijenta'];
$oibKlijenta = $_POST['OIBKlijenta'];
$datumRacuna = $_POST['datumRacuna'];
$datumIsporuke = $_POST['datumIsporuke'];
$rokPlacanja = $_POST['rokPlacanja'];
$modelPoziv = $_POST['modelPoziv'];
$operater = $_POST['operater'];
$jirzki = $_POST['JIRZKI'];
$clanoviUprave = $_POST['clanoviUprave'];
$temeljniKapital = $_POST['temeljniKapital'];
$sud = $_POST['sud'];
$nazivBanke = $_POST['nazivBanke'];
$iban = $_POST['IBAN'];
$swiftbic = $_POST['SWIFTBIC'];
$brRacuna = $_POST['brRacuna'];
$proizvodi = json_decode($_POST['proizvodi']);


$sql = 'INSERT INTO racun (nazivTvrtke, adresa, maticniBroj, OIB, telefon, nazivTvrtkeKlijenta, adresaTvrtkeKlijenta, maticniBrojKlijenta, oibKlijenta, 
                               modelPoziv, operater, jirzki, clanoviUprave, temeljniKapital, sud, nazivBanke, iban, swiftbic) 
    VALUES (:nazivTvrtke, :adresa, :maticniBroj, :oib, :telefon, :nazivTvrtkeKlijenta, :adresaTvrtkeKlijenta, :maticniBrojKlijenta, :oibKlijenta, 
              :modelPoziv, :operater, :jirzki, :clanoviUprave, :temeljniKapital, :sud, :nazivBanke, :iban, :swiftbic);';

$stmt = $pdo->prepare($sql);

if ($stmt) {

    if ($stmt->execute([
        "nazivTvrtke" => $nazivTvrtke,
        "adresa" => $adresa,
        "maticniBroj" => $maticniBroj,
        "oib" => $oib,
        "telefon" => $telefon,
        "nazivTvrtkeKlijenta" => $nazivTvrtkeKlijenta,
        "adresaTvrtkeKlijenta" => $adresaTvrtkeKlijenta,
        "maticniBrojKlijenta" => $maticniBrojKlijenta,
        "oibKlijenta" => $oibKlijenta,
        "modelPoziv" => $modelPoziv,
        "operater" => $operater,
        "jirzki" => $jirzki,
        "clanoviUprave" => $clanoviUprave,
        "temeljniKapital" => $temeljniKapital,
        "sud" => $sud,
        "nazivBanke" => $nazivBanke,
        "iban" => $iban,
        "swiftbic" => $swiftbic
    ])) {

        $id = $pdo->lastInsertId();
        $html_file = fopen("pdf_template.html", "r");
        $html = fread($html_file, filesize("pdf_template.html"));
        $html = str_replace("(((naziv_tvrtke)))", $nazivTvrtke, $html);
        $html = str_replace("(((adresa)))", $adresa, $html);
        $html = str_replace("(((maticni_broj)))", $maticniBroj, $html);
        $html = str_replace("(((oib)))", $oib, $html);
        $html = str_replace("(((telefon)))", $telefon, $html);
        $html = str_replace("(((naziv_tvrtke_klijenta)))", $nazivTvrtkeKlijenta, $html);
        $html = str_replace("(((adresa_klijenta)))", $adresaTvrtkeKlijenta, $html);
        $html = str_replace("(((maticni_broj_klijenta)))", $maticniBrojKlijenta, $html);
        $html = str_replace("(((oib_klijenta)))", $oibKlijenta, $html);
        
        $html = str_replace("(((datum_racuna)))", $datumRacuna, $html);
        $html = str_replace("(((rok_placanja)))", $rokPlacanja, $html);
        $html = str_replace("(((datum_isporuke)))", $datumIsporuke, $html);
        $html = str_replace("(((model_poziv)))", $modelPoziv, $html);
        $html = str_replace("(((br_racuna)))", $brRacuna, $html);
        $html = str_replace("(((operater)))", $operater, $html);
        $html = str_replace("(((jirzki)))", $jirzki, $html);
        $html = str_replace("(((clanovi_uprave)))", $clanoviUprave, $html);
        $html = str_replace("(((temeljni_kapital)))", $temeljniKapital, $html);
        $html = str_replace("(((sud)))", $sud, $html);
        $html = str_replace("(((naziv_banke)))", $nazivBanke, $html);
        $html = str_replace("(((iban)))", $iban, $html);
        $html = str_replace("(((swift)))", $swiftbic, $html);
        $ukupno = 0;
        $pdv = 0;
        $punaCijena = 0;
        foreach ($proizvodi as $proizvod) {
            $sql1 = 'INSERT INTO racun_proizvodi (racun_id, naziv, kolicina, cijena) VALUES (:racun_id, :naziv, :kolicina, :cijena);';
            $stmt1 = $pdo->prepare($sql1);
            if ($stmt1) {

                if ($stmt1->execute([
                    "racun_id" => $id,
                    "naziv" => $proizvod->naziv,
                    "kolicina" => $proizvod->kolicina,
                    "cijena" => $proizvod->cijena
                ])) {

                    $ukupno += $proizvod->cijena * $proizvod->kolicina;
                    $pdv += $proizvod->cijena * $proizvod->kolicina * 0.25;

                    $tabela = "";
                    foreach ($proizvodi as $proizvod) {
                        $tabela .= "<tr>" .
                            '<td style="padding-left: 25px;">' . $proizvod->naziv . '</td>' .
                            '<td style="padding-left: 25px;">' . $proizvod->kolicina . '</td>' .
                            '<td style="padding-left: 25px;">' . $proizvod->cijena . '</td>' .
                            '<td style="padding-left: 25px;">' . $proizvod->kolicina * $proizvod->cijena . '</td>' .
                            "</tr>";
                    }
                }
            }
        }
        $html = str_replace("(((ukupno)))", $ukupno, $html);
        $html = str_replace("(((pdv)))", $pdv, $html);
        $html = str_replace("(((ukupna_cijena)))", $ukupno + $pdv, $html);
        $html = str_replace("(((tabela)))", $tabela, $html);
        $mpdf = new \Mpdf\Mpdf();

        $mpdf->WriteHTML($html);

        $mpdf->Output("pdf/racun" . $id . ".pdf", "F");
        myecho("http://$_SERVER[HTTP_HOST]/pdf/racun" . $id . ".pdf");
    }
}
