
import { Law, LawCategoryId } from '../types';

export const LAWS: Law[] = [
  // Uburyo bwo gutwara (Driving behavior)
  {
    id: 'beh1',
    categoryId: LawCategoryId.BEHAVIOR,
    title: 'Kugendera Iburyo bw\'Umuhanda',
    content: 'Umuyobozi wese w’ikinyabiziga, igihe cyose bishoboka, agomba gukomeza kugendesha ikinyabiziga atwaye ku ruhande rw’iburyo rw’umuhanda kandi akegera inkombe yawo y’iburyo. (Ingingo ya 12)'
  },
  {
    id: 'beh2',
    categoryId: LawCategoryId.BEHAVIOR,
    title: 'Kugaragaza Umugambi wo Guhindura Icyerekezo',
    content: 'Mbere yo kugira aho agana, umuyobozi agomba kubigaragaza ku buryo budashidikanywa akoresheje indanga-cyerekezo cyangwa ibiranga-cyerekezo by\'ikinyabiziga cye. (Ingingo ya 17)'
  },
  {
    id: 'beh3',
    categoryId: LawCategoryId.BEHAVIOR,
    title: 'Kubahiriza Ibitegetsi',
    content: 'Umugenzi wese uri mu nzira nyabagendwa agomba guhita yumvira ibitegetswe n\'abakozi babifitiye ububasha. Ibitegekwa n\'abakozi birusha agaciro ibindi bimenyetso. (Ingingo ya 5)'
  },
  {
    id: 'beh4',
    categoryId: LawCategoryId.BEHAVIOR,
    title: 'Gutwara Witondeye',
    content: 'Umuyobozi wese agomba buri gihe kuyobora ikinyabiziga cye yitonze, kandi akaringaniza umuvuduko wacyo n\'uko ahantu hameze, imiterere y\'umuhanda, n\'imiterere y\'ikirere. (Ingingo ya 26)'
  },
  {
    id: 'beh5',
    categoryId: LawCategoryId.BEHAVIOR,
    title: 'Kutavugira kuri Telefone utwaye',
    content: 'Birabujijwe gutwara ikinyabiziga urimo kuvugira kuri telefone ngendanwa, keretse gusa ukoresheje ibikoresho byabugenewe bitagusaba gufata telefone (kit mains-libres).'
  },
  {
    id: 'beh6',
    categoryId: LawCategoryId.BEHAVIOR,
    title: 'Kutabangamira Urugendo',
    content: 'Birabujijwe kubangamira uburyo bwo kugenda mu muhanda cyangwa gutuma watera ibyago, nko kujugunya, kurunda, cyangwa gusiga ibintu mu nzira nyabagendwa. (Ingingo ya 8)'
  },
  
  // Umuvuduko (Speed limits)
  {
    id: 'spd1',
    categoryId: LawCategoryId.SPEED,
    title: 'Umuvuduko Ntarengwa Mu Nsisiro',
    content: 'Mu nsisiro, umuvuduko ntarengwa w\'imodoka zigenewe gutwara abantu ni 50 km/h; ibindi binyabiziga byose ni 40 km/h, keretse byerekanwe ukundi n\'ibyapa. (Ingingo ya 28)'
  },
  {
    id: 'spd2',
    categoryId: LawCategoryId.SPEED,
    title: 'Umuvuduko Ntarengwa Hanze y\'Insisiro',
    content: 'Hanze y\'insisiro, umuvuduko ntarengwa w\'amapikipiki n\'imodoka zifite uburemere butarenga 3500kg ni 80 km/h. Ibindi binyabiziga bigira imivuduko yihariye. (Ingingo ya 28)'
  },
  {
    id: 'spd3',
    categoryId: LawCategoryId.SPEED,
    title: 'Kugabanya Umuvuduko',
    content: 'Umuyobozi agomba kugabanya umuvuduko kandi byaba ngombwa agahagarara bitewe n\'uko ahantu hameze, nk\'igihe hatabona neza, iyo umuhanda urimo inkomyi, iyo ari mu makoni, n\'ahandi hatera ibyago. (Ingingo ya 26)'
  },
  {
    id: 'spd4',
    categoryId: LawCategoryId.SPEED,
    title: 'Umuvuduko Udasanzwe',
    content: 'Birabujijwe kubangamira imigendere isanzwe y’ibindi binyabiziga kubera kugabanya umuvuduko ku buryo budasanzwe cyangwa gukacira feri bidatewe no kwirinda ibyago. (Ingingo ya 26)'
  },

  // Imyanya mu Muhanda (Vehicle positioning)
  {
    id: 'pos1',
    categoryId: LawCategoryId.POSITIONING,
    title: 'Intera Hagati y\'Ibinyabiziga',
    content: 'Umuyobozi w\'ikinyabiziga gikurikiye ibindi agomba gusiga umwanya witaje uhagije hagati y\'icye n\'icyo akurikiye kugira ngo atakigonga mu gihe kigabanyije umuvuduko. (Ingingo ya 31)'
  },
  {
    id: 'pos2',
    categoryId: LawCategoryId.POSITIONING,
    title: 'Guhagarara no Guparika',
    content: 'Ikinyabiziga gihagaze umwanya muto cyangwa munini kigomba kuba kiri ahegereye bishobotse akayira k\'abanyamaguru, kandi kure cyane bishobotse y\'umurongo ugabanya umuhanda. (Ingingo ya 32)'
  },
   {
    id: 'pos3',
    categoryId: LawCategoryId.POSITIONING,
    title: 'Ahabujijwe Guhagarara',
    content: 'Birabujijwe guhagarara akanya gato cyangwa kanini ahantu hose bigaragara ko hashobora guteza ibyago cyangwa kubera imbogamizi, nko mu makorosi, hejuru y\'umusozi, no ku butaka bw\'abanyamaguru. (Ingingo ya 33)'
  },
  {
    id: 'pos4',
    categoryId: LawCategoryId.POSITIONING,
    title: 'Umuhanda w’Ibyerekezo Bibiri',
    content: 'Iyo umuhanda ugabanyijwemo ibisate bine kandi ukagenderwamo mu byerekezo bibiri, umuyobozi abujijwe kunyura mu bisate bibiri biri ibumoso. (Ingingo ya 12)'
  },
  {
    id: 'pos5',
    categoryId: LawCategoryId.POSITIONING,
    title: 'Ibinyabiziga bihagaze ku muhanda',
    content: 'Ikinyabiziga cyose uretse velomoteri cyangwa ipikipiki gihagaritswe ku muhanda kigomba kurangirwa kure n\'ikimenyetso cyabigenewe, kugira ngo kiburire hakiri kare abandi bayobozi. (Ingingo ya 32)'
  },

  // Uburyo bwo kunyura (Overtaking rules)
  {
    id: 'ovt1',
    categoryId: LawCategoryId.OVERTAKING,
    title: 'Kunyuranaho Bikorerwa Ibumoso',
    content: 'Kunyuranaho bikorerwa mu ruhande rw’ibumoso. Ariko, bigomba gukorerwa iburyo iyo umuyobozi unyurwaho amaze kwerekana ko ashaka kugana ibumoso. (Ingingo ya 21)'
  },
  {
    id: 'ovt2',
    categoryId: LawCategoryId.OVERTAKING,
    title: 'Ahabujijwe Kunyuranaho',
    content: 'Mu mihanda bagendamo mu byerekezo byombi, kunyuraho ibumoso birabujijwe bitewe n\'impamvu nk\'ibihu cyangwa kuba hafi y\'ikomyi cyangwa y\'impinga y\'umupando. (Ingingo ya 22)'
  },
  {
    id: 'ovt3',
    categoryId: LawCategoryId.OVERTAKING,
    title: 'Kworohereza Unyuraho',
    content: 'Umuyobozi ubonye ko hari undi umukurikiye ushaka kumunyuraho agomba kwegera iruhande rw’iburyo rw’umuhanda atongeye umuvuduko. (Ingingo ya 21)'
  },
  {
    id: 'ovt4',
    categoryId: LawCategoryId.OVERTAKING,
    title: 'Kubisikana',
    content: 'Kubisikana bikorerwa ku ruhande rw\'iburyo. Umuyobozi wese ubisikana n\'undi agomba gusiga ibumoso bwe umwanya uhagije kugirango itambuka ry\'undi ryorohe. (Ingingo ya 20)'
  },
  {
    id: 'ovt5',
    categoryId: LawCategoryId.OVERTAKING,
    title: 'Kubisikana ahacuramye',
    content: 'Mu mihanda yo mu misozi aho ibisikana ridashoboka, umuyobozi w’ikinyabiziga kimanuka agomba gushyira ku ruhande ikinyabiziga cye kugira ngo areke ikizamuka gitambuke. (Ingingo ya 20)'
  },

  // Ibirengezwa (Priority rules)
  {
    id: 'prio1',
    categoryId: LawCategoryId.PRIORITY,
    title: 'Ibinyabiziga Ndakumirwa',
    content: 'Iyo umugenzi asatiriwe n\'ikinyabiziga ndakumirwa kirangwa n\'intabaza yihariye, agomba kugihigamira ako kanya ndetse byaba ngombwa agahagarara. (Ingingo ya 37)'
  },
  {
    id: 'prio2',
    categoryId: LawCategoryId.PRIORITY,
    title: 'Abanyamaguru',
    content: 'Iyo hatari utuyira, abanyamaguru bagomba kunyura mu tuyira turi ku musezero w\'umuhanda. Iyo bambukiranya umuhanda, bagomba kureka ibinyabiziga bigenda bigahita. (Ingingo ya 48)'
  },
   {
    id: 'prio3',
    categoryId: LawCategoryId.PRIORITY,
    title: 'Gutanga Inzira mu Nkomane',
    content: 'Umuyobozi wese ugeze mu nkomane agomba kureka ibinyabiziga bituruka mu kuboko kwe kw’iburyo bigatambuka, keretse iyo ari mu masangano amategeko yihariye abigenza ukundi. (Ingingo ya 16)'
  },
  {
    id: 'prio4',
    categoryId: LawCategoryId.PRIORITY,
    title: 'Inkomane ya Ruhurura',
    content: 'Umuyobozi ugiye kwinjira mu isangano aho bagomba kuzenguruka (ruhuruza), agomba kureka ibinyabiziga byagezemo bigatambuka. (Ingingo ya 16)'
  },
  {
    id: 'prio5',
    categoryId: LawCategoryId.PRIORITY,
    title: 'Ibinyabiziga rusange bitwara abantu',
    content: 'Mu nsisiro, kugirango ibinyabiziga bisanzwe bitwarira hamwe abantu bigende neza, abayobozi b\'ibindi binyabiziga bagomba kugenda buhoro ndetse bagahagarara kugirango biborohereze. (Ingingo ya 18)'
  },
  
  // Ibihano (Fines & penalties)
  {
    id: 'pen1',
    categoryId: LawCategoryId.PENALTIES,
    title: 'Icyitonderwa ku Mpanuka',
    content: 'Bitabangamiye ibiteganywa n\'amategeko ahana, umugenzi wese uguweho n\'impanuka agomba guhita ahagarara, kandi ntagobye kubangamira bundi bushya uburyo bwo kugenda. (Ingingo ya 4)'
  },
  {
    id: 'pen2',
    categoryId: LawCategoryId.PENALTIES,
    title: 'Uruhushya rwo Gutwara',
    content: 'Ntawe ushobora gutwara ikinyabiziga kigendeshwa na moteri mu nzira nyabagendwa adafite kandi atitwaje uruhushya rwo gutwara rwatanzwe na Polisi y\'igihugu. (Ingingo ya 6)'
  },
  {
    id: 'pen3',
    categoryId: LawCategoryId.PENALTIES,
    title: 'Ikirango cy\'Ikinyabiziga',
    content: 'Ikinyabiziga ntigishobora kugenda mu nzira nyabagendwa kitabanje kwandikwa. Buri kinyabiziga kigomba guhabwa inomero iranga ishyirwa ku cyapa. (Ingingo ya 122 & 125)'
  },
  {
    id: 'pen4',
    categoryId: LawCategoryId.PENALTIES,
    title: 'Kutagira Ubwishingizi',
    content: 'Gutwara ikinyabiziga kidafite ubwishingizi bwemewe n’amategeko ni icyaha gihanirwa n’ihazabu iremereye no gufatira ikinyabiziga.'
  },
  {
    id: 'pen5',
    categoryId: LawCategoryId.PENALTIES,
    title: 'Gutwara wasinze',
    content: 'Gutwara ikinyabiziga ufite igipimo cy’inzoga mu maraso kirengeje igiteganywa n’amategeko bihanishwa ihazabu iremereye, gufungwa, no kwamburwa uruhushya rwo gutwara.'
  }
];
