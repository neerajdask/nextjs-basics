import {useRouter} from 'next/router'

const DetailsPage = () => {
	const router = useRouter();

	const id = router.query.newsId;

	return (
	<div>
		The Details page {id}
	</div>);
};

export default DetailsPage;
